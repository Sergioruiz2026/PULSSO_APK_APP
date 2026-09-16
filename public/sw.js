const CACHE='pulsso-v23-final';
const ASSETS=['./','./index.html','./logo.png','./manifest.json','./src/css/style.css','./src/js/storage.js','./src/js/voice.js','./src/js/firebase.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
