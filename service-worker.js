const CACHE_NAME = 'bang-cache-v1';
const urlsToCache = [
  '/',
  '/index.html', 
  '/script.js',
  '/NizarNastaliqKurdish.ttf', 
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Kurdish:wght@400;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Cache assets during service worker install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Failed to open cache and add URLs: ', error);
      })
  );
});

// Serve cached content or fetch from the network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          // If cache hit, return the cached version
          return response;
        }
        // Else fetch from the network
        return fetch(event.request).catch(function(error) {
          console.log('Network error: ', error);
          // Optionally return a fallback page if the network is unavailable
          return caches.match('/offline.html'); 
        });
      })
  );
});

// Activate the service worker and clean up old caches if any
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old caches
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
