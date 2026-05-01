# 💰 Finanzas — PWA Personal

App de control de gastos e ingresos. PWA instalable, Firebase Firestore, IA integrada.

---

## 🚀 Configuración en 3 pasos

### 1. Crear proyecto Firebase

1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Crear proyecto → nombre: `finanzas-personal`
3. Activar **Firestore Database** → modo producción
4. Reglas de Firestore (solo tú):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // Cambiar a autenticado si deseas seguridad
    }
  }
}
```
5. Configuración del proyecto → **Agregar app web** → copiar `firebaseConfig`

### 2. Pegar config en index.html

Busca este bloque en `index.html` (línea ~30):

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",           // ← pegar aquí
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### 3. Publicar en GitHub Pages

```bash
# En tu repositorio de GitHub:
git init
git add .
git commit -m "Finanzas PWA v1.0"
git remote add origin https://github.com/TU_USUARIO/finanzas-personal.git
git push -u origin main

# En GitHub → Settings → Pages → Branch: main → / (root)
```

URL final: `https://TU_USUARIO.github.io/finanzas-personal/`

---

## 📱 Instalar como app en el celular

- **Android**: Chrome → menú ⋮ → "Agregar a pantalla de inicio"
- **iPhone**: Safari → compartir → "Agregar a inicio"

---

## ✨ Funcionalidades

| Módulo | Descripción |
|--------|-------------|
| 🏠 Inicio | Balance, transacciones, filtros por período y categoría |
| ➕ Agregar | Ingreso/gasto manual con categoría, fecha, nota |
| 🎤 Mic AI | Di el gasto en voz y la IA lo registra automáticamente |
| 📷 Scan AI | Foto de ticket → extrae monto y comercio con IA |
| 📝 Notas AI | Escribe texto libre → la IA detecta los gastos |
| 📊 Reportes | Dona por categoría, barras mensuales, desglose % |
| ↓ CSV | Exportar todos los datos en Excel-compatible |
| ⚙️ Perfil | Editar nombre, gestionar categorías, borrar datos |

---

## 🗂️ Categorías por defecto

🍔 Comida · 🏠 Vivienda · 🚗 Transporte · 💊 Salud · 🎬 Ocio
🛍️ Compras · 📚 Educación · 💰 Salario · 📈 Inversión · 🏦 Ahorro · 💡 Servicios · 📌 Otro

---

## 🔧 Tecnologías

- **Firebase Firestore** — base de datos en tiempo real
- **Claude AI (claude-sonnet-4)** — interpretación de voz, imagen y notas
- **Chart.js** — gráficas de dona y barras
- **Web Speech API** — reconocimiento de voz
- **PWA** — instalable, sin App Store

---

*v1.0 — Uso personal de Héctor*
