const cacheName = "datingapp-v1";
// TODO: code to handle fetch requests

self.addEventListener('push', (event) => {
  let notification = event.data.json();
  self.registration.showNotification(
    notification.title || 'Hello There',
    notification.options
  );
});

