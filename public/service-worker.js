if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} 
else {
  console.log(`Workbox didn't load`);
}

self.addEventListener('push', function(ev) {
  var data = ev.data.text();
  if(!data){
      data = ev.data.json()
  }
  console.log('Got push: ' +  data);
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: '/assets/logo.png'
  });
});

self.addEventListener('message', (e) => {
  if (!e.data) {
    return;
  }

  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});