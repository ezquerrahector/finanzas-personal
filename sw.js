// Versión 3 — fuerza actualización en todos los dispositivos
const CACHE = 'finanzas-v3';

self.addEventListener('install', e => {
  self.skipWaiting(); // Activar inmediatamente sin esperar
});

self.addEventListener('activate', e => {
  // Borrar TODOS los caches viejos
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// NETWORK FIRST: siempre va a la red primero
// Solo usa cache si no hay red (sin conexión)
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Guardar copia fresca en cache
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
