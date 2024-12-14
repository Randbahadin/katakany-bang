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

// Function to display the install prompt
function displayInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log('User choice:', choiceResult.outcome);
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null; 
    });
  }
}

// Check if the browser supports the install prompt
let deferredPrompt; 
window.addEventListener('beforeinstallprompt', function(event) {
  event.preventDefault(); 
  deferredPrompt = event; 

  // You can trigger the prompt here, or at a more appropriate time in your app
  // For example, you could show a button that the user can click to install the app
  // displayInstallPrompt(); 

  // Or, you could trigger the prompt after a certain amount of time, or when the user interacts with a specific element
  setTimeout(displayInstallPrompt, 5000); // Show the prompt after 5 seconds
});
