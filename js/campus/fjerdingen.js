var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 59.916191, lng: 10.759697},
   zoom: 17,
   styles: style
 });
 var fjerdingenLoc = {
   lat: 59.916191,
   lng: 10.759697
 };
 var brenneriveienLoc = {
   lat: 59.920379,
   lng: 10.752820
 };
 var kvadraturenLoc = {
   lat: 59.911020,
   lng: 10.746049
 };
 var vulkanLoc = {
   lat: 59.923163,
   lng: 10.752284
 };

 var markerIcon = {
   url: 'img/campus-marker.png',
   scaledSize: new google.maps.Size(40, 40),
   origin: new google.maps.Point(0, 0),
   anchor: new google.maps.Point(32, 65)
 };
 new MarkerWithLabel({
   map: map,
   animation: google.maps.Animation.DROP,
   position: kvadraturenLoc,
   icon: markerIcon,
   labelContent: 'Kvadraturen',
   labelAnchor: new google.maps.Point(50, 30),
   labelClass: "map-label", // your desired CSS class
   labelInBackground: true
 });
 new MarkerWithLabel({
   map: map,
   animation: google.maps.Animation.DROP,
   position: brenneriveienLoc,
   icon: markerIcon,
   labelContent: 'Brenneriveien',
   labelAnchor: new google.maps.Point(55, 30),
   labelClass: "map-label", // your desired CSS class
   labelInBackground: true
 });
 new MarkerWithLabel({
   map: map,
   animation: google.maps.Animation.DROP,
   position: vulkanLoc,
   icon: markerIcon,
   labelContent: 'Vulkan',
   labelAnchor: new google.maps.Point(35, 30),
   labelClass: "map-label", // your desired CSS class
   labelInBackground: true
 });
 new MarkerWithLabel({
   map: map,
   animation: google.maps.Animation.DROP,
   position: fjerdingenLoc,
   icon: markerIcon,
   labelContent: 'Fjerdingen',
   labelAnchor: new google.maps.Point(45, 30),
   labelClass: "map-label", // your desired CSS class
   labelInBackground: true
 });

 var icons = {
   cafe: {
     url: "img/bar.svg", // url
     scaledSize: new google.maps.Size(50, 50), // scaled size
     origin: new google.maps.Point(0,0), // origin
     anchor: new google.maps.Point(0, 0) // anchor
   },
   bar: {
    url: "img/bar.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  shopping: {
    url: "img/shopping.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  activity: {
    url: "img/activity.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  food: {
    url: "img/food.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }
 };
var place=[
{
  name: 'Espresso House',
  body: 'Test',
  position: {lat: 59.9161627, lng: 10.7591278},
  type: 'shopping'
},
{
  name: 'Oslo',
  body: 'by',
  position: {lat: 59.916666, lng: 10.751317},
  type: 'shopping'
},
{
  name: 'Espresso House',
  body: 'Test',
  position: {lat: 59.919011, lng: 10.781915},
  type: 'food'
}];

var markers = [];
// Create markers.
place.forEach(function(place) {
  var marker = new google.maps.Marker({
    position: place.position,
    icon: icons[place.type],
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<h1>" + place.name + "</h1><p>" + place.body + "</p>"
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  markers.push(marker);
});

var onChangeHandler = function(icon) {
  markers.forEach(function(marker) {
    if (marker.icon.url == icon.url) {
      if (!marker.getVisible()) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    }
  });
};
document.getElementById('cafeRadio').addEventListener('change', function() {  onChangeHandler(icons.cafe); });
document.getElementById('barRadio').addEventListener('change', function() {  onChangeHandler(icons.bar); });
document.getElementById('foodRadio').addEventListener('change', function() {  onChangeHandler(icons.food); });
document.getElementById('shoppingRadio').addEventListener('change', function() {  onChangeHandler(icons.shopping); });
document.getElementById('activityRadio').addEventListener('change', function() {  onChangeHandler(icons.activity); });
}
google.maps.event.addDomListener(window, 'load', initMap);

function updateFilters(){

}


var $myGroup = $('#myGroup');
$myGroup.on('show.bs.collapse','.collapse', function() {
$myGroup.find('.collapse.in').collapse('hide');
});
