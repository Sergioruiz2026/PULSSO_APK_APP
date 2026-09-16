# PULSSO v2.3 FINAL - ZIP Listo para Visual Studio Code
### DISCLAIMER + CRISIS + HÍBRIDO

✅ **Incluye:**
- Logo original 220px círculo glow
- Disclaimer legal permanente: "PULSSO no diagnostica, no reemplaza profesionales. Solo ayuda a no estar solo."
- Crisis Chile: *4141 Salud Responde y 600 360 7777 en todas las pantallas
- Red híbrida: PULSSO Chat si tiene app, WhatsApp si no + Invitar
- Contactos guardados en nube (simulado + Firebase listo)
- Mensajes sin alarma: "¿vamos por un café?" no "ALERTA"
- Voz neutral es-CL 0.88
- Banner AdMob

### Pasos en Visual Studio Code:

1. Descomprime el ZIP
2. Abre la carpeta pulsso-app-v23 en Visual Studio Code
3. Terminal:
```bash
npm install
npx cap add android
npx cap sync
npx cap open android
```
4. En Android Studio: Build -> Generate Signed APK / App Bundle

### Estructura:
pulsso-app-v23/
├── public/
│   ├── index.html (7 pantallas, disclaimer, crisis, híbrido, voz)
│   ├── logo.png
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── src/
│   ├── css/style.css
│   └── js/storage.js, voice.js, firebase.js
├── capacitor.config.json
├── package.json
└── README.md

### Notas legales:
PULSSO NO es terapia, no diagnostica, no reemplaza profesionales.
Crisis Chile: *4141 y 600 360 7777 - 24/7

Hecho con 💛 en Chile
