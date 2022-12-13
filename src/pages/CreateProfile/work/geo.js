// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

// To get a location use this API:
// https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&format=json
// https://nominatim.org/release-docs/latest/api/Reverse/

// Asking Permission
// https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API

function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition((g => {
        resolve(convertToLocation(g.coords.latitude, g.coords.longitude));
      }), reject);
    }
  });
}

function convertToLocation(lat, lon) {
  return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    .then(r => r.json());
}

export default {
  getLocation
}
