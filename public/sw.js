//NOTE: service workers work via. HTTPS only. localhost is only exception

//there is no access to common events eg. click but SW lifecycle events
self.addEventListener('install', function (event) {
    console.log('[SW] Installing...', event)
});

self.addEventListener('activate', function (event) {
    console.log('[SW] Activating...', event);
    return self.clients.claim(); //this line to make activating more robust
});

self.addEventListener('fetch', function (event) {
    console.log('[SW] Fetching...', event);
    event.respondWith(fetch(event.request));
});


