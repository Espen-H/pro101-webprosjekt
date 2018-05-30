var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 59.911020, lng: 10.746049},
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
  name: 'Outland',
  body: 'Åpent Man-fre 09-20, Lørdag 09-19, Søndag 12-18',
  position: {lat: 59.911664, lng: 10.744789},
  type: 'shopping'
},
{
  name: 'Subway',
  body: 'Åpent Man-fre 09-20, Lørdag 10-20, Søndag 11-19',
  position: {lat: 59.911605, lng: 10.745213},
  type: 'food'
},
{
  name: 'Prince Lunchbar',
  body: 'Åpent Man-fre 0630-1900, Lørdag 08-18, Søndag Stengt ',
  position: {lat: 59.910958, lng: 10.744647},
  type: 'food'
},
{
name: 'Kvadrat Salat',
body: 'Åpent Man-fre 10-18, stengt lørdag og søndag',
position: {lat:59.911298, lng:  10.743468},
type: 'cafe'
},
{
name: 'MAMMA Pizza',
body: 'Åpent Man-fre 11-2130, Lør-søn 12-2130',
position: {lat:59.910778, lng: 10.746774},
type: 'food'
},
{
name: 'The Escape Games Oslo',
body: 'Åpent 10-23 hele uken',
position: {lat:59.910092, lng: 10.747324},
type: 'activity'
},
{
name: 'MAX',
body: 'Åpent Man-ons 10-01, Tor-lør 10-0330, Søndag 11-01',
position: {lat:59.912725, lng: 10.741820},
type: 'food'
},
{
name: 'The Scotsman',
body: 'Åpent Mandag 11-01, Tir-fre 11-03, Lørdag 11-01 , Søndag 12-01',
position: {lat:59.912613, lng: 10.743608},
type: 'bar'
},
{
name: 'Steen & Strøm Department Store',
body: 'Åpent Man-ons og fredag 10-19, Torsdag 10-20,Lørdag 10-18, Stengt Søndag.  ',
position: {lat:59.911984, lng: 10.743018},
type: 'shopping'
},
{
name: 'Lotus Shi\'s sushi Bar',
body: 'Åpent hele uken 14-23',
position: {lat:59.910238, lng: 10.745331},
type: 'food'
},
{
name: 'Cinemateket',
body: 'Åpent Ma10.00-16.00, Ti-fr10.00-21.00, Lø12.00-17.00, Sø13.00-21.00',
position: {lat:59.909622, lng: 10.745724},
type: 'activity'
},
{
name: 'The Dubliner Oslo',
body: 'Åpent Søn-man 12-01, Tir-lør 12-03',
position: {lat:59.909884, lng: 10.740600},
type: 'bar'
},
{
name: 'Joker',
body: 'Åpent Man-tor 7-24, Fredag 07-04, Lørdag 09-04, Søndag 09-24',
position: {lat:59.910962, lng: 10.741609},
type: 'shopping'
},
{
name: 'The Minibottle Gallery',
body: 'Åpent Lørdag og Søndag 12-16',
position: {lat:59.909665, lng: 10.743360},
type: 'activity'
},
{
name: 'A.C. Perch\'s',
body: 'Åpent Man-tor 09-1730, Fredag 09-18, Lørdag 09-17',
position: {lat:59.909358, lng: 10.742673},
type: 'cafe'
},
{
name: 'Kaffebrenneriet',
body: 'Åpent Man-fre 07-20, Lørdag 08-18',
position: {lat:59.911701, lng: 10.747726},
type: 'cafe'
},
{
name: 'Neo Tokyo',
body: 'Åpent Man-fre 10-20, Lørdag 10-18',
position: {lat:59.911701, lng: 10.747726},
type: 'shopping'
},
{
name: 'Ensemble Allegria',
body: 'Orkerster http://www.ensembleallegria.com/',
position: {lat:59.910504, lng:  10.747817},
type: 'activity'
},
{
name: 'Peppes Pizza',
body: 'Åpent Man-Lør 11-2330, Søndag 13-2030',
position: {lat:59.911358, lng: 10.749497},
type: 'food'
},
{
name: 'Pastel da Nata',
body: 'Åpent Man-fre 11-1830, Lørdag og Søndag 11-1630',
position: {lat:59.910441, lng: 10.742294},
type: 'food'
},
{
name: 'Hvelvet studentpub',
body: 'Åpent Torsdag 18-03',
position: {lat:59.911208, lng: 10.744851},
type: 'bar'
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
