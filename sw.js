self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('roteiro-store').then((cache) => {
    return cache.addAll(['roteiro_japao.html', 'manifest.json']);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});