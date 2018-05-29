var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 59.920379, lng: 10.752820},
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
     url: "img/cafe.png", // url
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
  name: 'Brenneriet',
  body: 'Brenneriet er en søt liten cafe i brenneriveien',
  position: {lat: 59.919886, lng: 10.752132},
  type: 'cafe'
},
{
  name: 'BLÅ',
  body: 'BLÅ sin historie daterer seg tilbake til åpningsdagen 28. februar 1998. Det som en gang i tiden var et gammelt oppbevaringslager for gull og diamanter i Brenneriveien 9c har gjennom årene blitt brukt til så mangt opp gjennom årene før det endte opp slik vi kjenner det i dag – en av Norges premissleverandører for norsk og internasjonal musikk på et høyt kunstnerisk nivå.',
  position: {lat: 59.920163, lng: 10.752829},
  type: 'bar'
},
{
  name: 'Tenthaus',
  body: 'Art gallery',
  position: {lat: 59.920202, lng: 10.751563},
  type: 'activity'
},
{
  name: 'Café de Concert',
  body: 'Café de Concert has become the atelier and concert gallery of the young and multitalented pianist and composer Aksel Kolstad.',
  position: {lat: 59.919618, lng: 10.751720},
  type: 'activity'
},
{
  name: 'Naturis Kafé & Gelateria',
  body: 'Naturis Kafé & Gelateria er en organisk og koselig cafe',
  position: {lat: 59.919553, lng: 10.751218},
  type: 'cafe'
},
{
  name: 'Akina Sushi',
  body: 'Søt liten asiatisk resturant',
  position: {lat: 59.919901, lng: 10.750043},
  type: 'food'
},
{
  name: 'Frokost',
  body: 'Frokost er en søt liten frokostcafe på løkka',
  position: {lat: 59.920177, lng: 10.756978},
  type: 'cafe'
},
{
  name: 'Kom og Dans - Oslo',
  body: 'Dansekurs i brenneriveien',
  position: {lat: 59.920942, lng: 10.753400},
  type: 'activity'
},
{
  name: 'Frikar: 8',
  body: 'Dansebutikk på utkanten av vulkan',
  position: {lat: 59.921308, lng: 10.752805},
  type: 'shopping'
},
{
  name: 'Uno-X',
  body: 'Bensinstasjon',
  position: {lat: 59.921052, lng: 10.750980},
  type: 'shopping'
},
{
  name: 'Gorka Da',
  body: 'Resturant med god mat',
  position: {lat: 59.920136, lng: 10.751288},
  type: 'food'
},
{
  name: 'Bon Lio',
  body: 'Bon Lio er en kjempefin resturant med god mat',
  position: {lat: 59.920434, lng: 10.749064},
  type: 'food'
},
{
  name: 'SYNG',
  body: 'SYNG er en karaoke bar hvor man kan momme hvis man har lyst til å kose seg med litt musikk og sang',
  position: {lat: 59.919715, lng: 10.755342},
  type: 'activity'
},
{
  name: 'Britt Powers',
  body: 'I offer catering for any event that needs some amazing and health-freak approved food.',
  position: {lat: 59.920440, lng: 10.752665},
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
