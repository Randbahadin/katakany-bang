const CACHE_NAME = 'bang-cache-v1';
const urlsToCache = [
  '/',
  '/index.html', 
  '/script.js',
  '/NizarNastaliqKurdish.ttf', 
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Kurdish:wght@400;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch
