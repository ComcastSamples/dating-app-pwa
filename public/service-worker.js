const cacheName = "datingapp-v1";
self.addEventListener('fetch', (event) => {
  // Open the cache
  event.respondWith(caches.open(cacheName).then((cache) => {
    // Go to the network first
    return fetch(event.request.url).then((fetchedResponse) => {
      if (event.request.method === 'GET') {
        cache.put(event.request, fetchedResponse.clone());
      }

      return fetchedResponse;
    }).catch(() => {
      // If the network is unavailable, get
      return cache.match(event.request.url);
    });
  }));
});

self.addEventListener('push', (event) => {
  let notification = event.data.json();
  self.registration.showNotification(
    notification.title || 'Hello There',
    notification.options
  );
});

