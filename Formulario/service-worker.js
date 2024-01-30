// service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('formulario-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon.png',
          /* Agrega aquí otros archivos que quieras cachear */
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  