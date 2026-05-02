# Finanzas v3.4 — IA real con Firebase Functions

Esta versión mantiene el sync en tiempo real de la v3.3 y mueve la IA a un backend seguro en Firebase Functions.

## Archivos modificados

- `index.html`: ahora llama al endpoint `analyzeFinance` en Firebase Functions.
- `sw.js`: evita cache agresivo para que veas cambios recientes.
- `functions/index.js`: backend que llama a Claude/Anthropic.
- `functions/package.json`: dependencias del backend.
- `functions/.env.example`: ejemplo para configurar tu API key.

## Instalación

1. Copia estos archivos a tu repositorio.
2. En la carpeta `functions`, crea un archivo `.env` con:

```env
ANTHROPIC_API_KEY=sk-ant-api03-tu_api_key_aqui
ANTHROPIC_MODEL=claude-sonnet-4-20250514
```

3. Instala Firebase CLI si no lo tienes:

```bash
npm install -g firebase-tools
```

4. Inicia sesión:

```bash
firebase login
```

5. Vincula tu proyecto si hace falta:

```bash
firebase use finanzas-personal-99b1f
```

6. Instala dependencias:

```bash
cd functions
npm install
cd ..
```

7. Publica la función:

```bash
firebase deploy --only functions
```

8. Sube `index.html`, `sw.js` y `manifest.json` a GitHub Pages.

## Nota importante

Firebase Functions normalmente requiere que el proyecto tenga habilitado billing/plan Blaze. La API key no debe ir en `index.html` ni en GitHub.
