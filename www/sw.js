if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/my-html-app/www/sw.js')
    .then(function(reg) {
      console.log('Service Worker registered.', reg);
    })
    .catch(function(err) {
      console.log('Service Worker registration failed:', err);
    });
}
