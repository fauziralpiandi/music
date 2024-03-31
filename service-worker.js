var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
	'/',
	'https://fauziralpiandi.github.io/music'
];

self.addEventListener('install', function(event) {
	// Install Service Worker
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	// Intercept requests and serve from cache if available
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});