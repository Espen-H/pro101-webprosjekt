var map, directionsService, directionsDisplay;
function initMap() {
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.917933, lng: 10.750229},
    zoom: 15,
    styles: style
  });
  directionsDisplay.setMap(map);

}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: getTravelMode()
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function getTravelMode() {
  let radioWalk = document.getElementById("radioWalk");
  let radioBike = document.getElementById("radioBike");
  let RadioTransit = document.getElementById("RadioTransit");
  if (radioWalk.checked) {
    return "WALKING";
  }
  else if(radioBike.checked) {
    return "WALKING";
  }
  else {
    return "TRANSIT";
  }
}
