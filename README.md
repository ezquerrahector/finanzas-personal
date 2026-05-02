# Finanzas PWA — v3.3 Sync Real

Cambios incluidos:

- Sincronización en tiempo real con Firestore para transacciones.
- Sincronización en tiempo real para cuentas, créditos, cargos recurrentes, Instinto y categorías.
- Las acciones de botones inline quedan expuestas al `window` para funcionar desde GitHub Pages.
- Service Worker actualizado a v3.3 con estrategia network-first para reducir caché viejo.

## Archivos a reemplazar en GitHub

- `index_v3_3_sync_real.html` → renombrar a `index.html`
- `sw_v3_3_sync_real.js` → renombrar a `sw.js`
- `manifest_v3_3_sync_real.json` → renombrar a `manifest.json`

Después de subirlos, cerrar y abrir la PWA. En móvil, si sigue cargando una versión anterior, eliminar la app instalada y volverla a instalar desde Safari/Chrome.
