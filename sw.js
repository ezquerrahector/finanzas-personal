// Finanzas PWA — Service Worker v3.2
// Evita cachear llamadas de Firebase/Google y fuerza contenido fresco.
const CACHE_NAME = 'finanzas-v3.2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(STATIC_ASSETS).catch(() => undefined)
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Firebase, Google Auth, CDN y cualquier POST/PUT/etc. siempre van directo a red.
  if (req.method !== 'GET' || url.origin !== self.location.origin) {
    event.respondWith(fetch(req));
    return;
  }

  // Para la app propia: red primero, cache solo como respaldo offline.
  event.respondWith(
    fetch(req)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => undefined);
        return response;
      })
      .catch(() => caches.match(req))
  );
});
