self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('html-app-cache').then((cache) => {
      return cache.addAll([
        '/my-html-app/www/index.html',
        '/my-html-app/www/manifest.json',
        '/my-html-app/www/icon-192.png',
        '/my-html-app/www/icon-512.png',
        '/my-html-app/www/Cats Show.ttf',
        '/my-html-app/www/KOMIKAX_.ttf',
        '/my-html-app/www/Komigo3D.woff',
        '/my-html-app/www/block.mp3',
        '/my-html-app/www/win.mp3',
        
      ]);
    })
  );
});
