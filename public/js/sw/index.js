self.addEventListener('fetch', function(event) {
  console.log('you', event.request);
});