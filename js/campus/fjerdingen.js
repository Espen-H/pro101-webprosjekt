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
  name: 'Food Express',
  body: 'Daglivare butikk rett ved campus Fjerdingen',
  position: {lat: 59.916194, lng: 10.759505},
  type: 'shopping'
},
{
  name: 'Harald\'s gym',
  body: 'Velkommen til Haral\'s Gym Et av norges mest profilerte og suksessrike gym.',
  position: {lat: 59.915808, lng: 10.758759},
  type: 'activity'
},
{
  name: 'La Maison',
  body: 'Mediterranean, European, Greek, Vegetarian Friendly, Vegan Options, Gluten Free Options.',
  position: {lat: 59.916638, lng: 10.756585},
  type: 'bar'
},
{
  name: 'Trattoria Popolare',
  body: 'Italiensk resturant',
  position: {lat: 59.918284, lng: 10.759887},
  type: 'food'
},
{
  name: 'Arbil',
  body: 'En fin cafe som ligger rett ved hausmansgate',
  position: {lat: 59.916813, lng: 10.757509},
  type: 'cafe'
},
{
  name: 'Bed shop',
  body: 'Spesialbutikk for senger og madrasser i Oslo sentrum.',
  position: {lat: 59.915603, lng: 10.759315},
  type: 'shopping'
},
{
  name: 'Coop Prix',
  body: 'Åpent Man-fre 06-24, Lørdag 09-24',
  position: {lat: 59.916530, lng: 10.755906},
  type: 'shopping'
},
{
  name: 'Grytelokket',
  body: 'Åpent Man-lør 11-03, Søndag 12-03',
  position: {lat: 59.915532, lng: 10.755809},
  type: 'food'
},
{
  name: 'Rett inn bar',
  body: 'Åpent Man-fre 14-0330, Lørdag og Søndag 12-0330',
  position: {lat: 59.915113, lng: 10.754707},
  type: 'bar'
},
{
  name: 'Obento',
  body: 'Åpent Man-fre 11-19, Lørdag 10-18',
  position: {lat: 59.915246, lng: 10.753208},
  type: 'shopping'
},
{
  name: 'Thai Orchid',
  body: 'Åpent Man-lør 11-21, Søndag 14-21',
  position: {lat: 59.916332, lng: 10.754646},
  type: 'food'
},
{
  name: 'Joker Ankertorget',
  body: 'Åpent Man-fre 08-24, Lørdag og Søndag 10-24',
  position: {lat: 59.917607, lng: 10.755502},
  type: 'shopping'
},
{
  name: 'Pelton',
  body: 'Åpent Man-tir 08-23, Onsdag 08-2330, Torsdag 08-24, Fredag 08-0330, Lørdag 11-0330, Søndag 12-2330',
  position: {lat: 59.917428, lng: 10.754445},
  type: 'bar'
},
{
  name: 'Wünderburger',
  body: 'Åpent Man-tor 11-22, Fredag 11-03, Lørdag 12-03, Søndag 13-22',
  position: {lat: 59.917415, lng: 10.754212},
  type: 'food'
},
{
  name: 'Jødisk Museum',
  body: 'Åpent Tirsdag 10-15, Ons-tor 14-19, Søndag 11-16',
  position: {lat: 59.916520, lng: 10.755124},
  type: 'activity'
},
{
  name: 'Actic Gym',
  body: 'Åpent Man-fre 05-23, Lørdag og Søndag 08-22',
  position: {lat: 59.916124, lng: 10.757234},
  type: 'activity'
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
