// Finanzas v3.4 — sin cache agresivo para evitar versiones viejas en GitHub Pages
const CACHE = 'finanzas-v3.4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    fetch(req, { cache: 'no-store' }).catch(() => caches.match(req))
  );
});
