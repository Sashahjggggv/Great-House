// Initialize and add the map
function initMap() {
  // The location of Uluru
  const greathouse = { lat: 50.61664535369396, lng: 26.276761129148703 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: greathouse,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: greathouse,
    map: map,
  });
}

window.initMap = initMap;