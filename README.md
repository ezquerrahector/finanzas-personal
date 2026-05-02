# Finanzas — PWA Personal

## Archivos corregidos

Usa estos nombres en tu repositorio:

- `index.html`  ← reemplazar por `index_corregido.html`
- `sw.js`       ← reemplazar por `sw_corregido.js`
- `manifest.json`
- `icon-192.png`
- `icon-512.png`

## Correcciones incluidas

- Se eliminó un bloque de JavaScript roto que impedía ejecutar botones internos.
- Se expusieron las funciones usadas por `onclick`, porque estaban dentro de un script `type="module"` y no eran visibles globalmente.
- Se sincronizan cuentas, créditos, cargos recurrentes, categorías e Instinto en Firestore dentro de `users/{uid}/settings/appData`.
- Las transacciones siguen sincronizándose en tiempo real dentro de `users/{uid}/transactions`.
- El service worker ya no cachea llamadas a Firebase/Google para evitar datos viejos o inconsistencias entre web y móvil.

## Nota sobre IA

La IA desde navegador puede fallar por CORS o por seguridad si se llama directo a Anthropic. Esta versión mantiene la sección y muestra el estado de API Key, pero lo ideal para producción es mover esa llamada a un backend o Firebase Cloud Function.
