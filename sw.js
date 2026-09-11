self.addEventListener('install', e => e.waitUntil(caches.open('kpr-v3').then(c => c.addAll(['./']))));
