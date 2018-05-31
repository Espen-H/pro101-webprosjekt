var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 59.923163, lng: 10.752284},
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
     url: "img/icons/cafe.png", // url
     scaledSize: new google.maps.Size(50, 50), // scaled size
     origin: new google.maps.Point(0,0), // origin
     anchor: new google.maps.Point(0, 0) // anchor
   },
   bar: {
    url: "img/icons/bar.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  shopping: {
    url: "img/icons/shopping.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  activity: {
    url: "img/icons/activity.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  },
  food: {
    url: "img/icons/food.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }
 };
var place=[
{
  name: 'Rema 1000',
  body: 'Rema 1000, stilisert som REMA 1000 er en norsk franchisekjede med dagligvareforretninger som inngår i Reitangruppen.',
  position: {lat: 59.923296, lng: 10.751220},
  type: 'shopping'
},
{
  name: 'Mathallen',
  body: 'Mathallen er en arena for unike smaksopplevelser med det beste av norsk og internasjonal mat, mennesker og atmosfære, og et samlingspunkt for mattrender.',
  position: {lat: 59.922350, lng: 10.752042},
  type: 'food'
},
{
  name: 'Vulkan klatresenter',
  body: 'Vulkan Klatresenter drevet av kolsås Klatreklubb. Klatring for Barn, unge og voksne. Treningsgrupper for barn og ungdom. Vi har brattkortkurs.',
  position: {lat: 59.922946, lng: 10.751951},
  type: 'activity'
},
{
  name: 'Hendrix Ibsen',
  body: 'We are not all about coffee, we care about offering quality products within food, music and art as well. With ongoing exhibition and a used records shop we make for an exciting destination!vWelcome everyone!',
  position: {lat: 59.921947, lng: 10.751364},
  type: 'cafe'
},
{
  name: 'Døgnvill',
  body: 'Byens beste burgere, tjukke milkshakes og funky musikk i Oslo og Stavanger. Kjempetrivelig atmosfære og hyggelig service.',
  position: {lat: 59.921720, lng: 10.751631},
  type: 'food'
},
{
  name: 'SiO Athletica',
  body: 'Treningsenter for studenter',
  position: {lat: 59.923175, lng: 10.752120},
  type: 'activity'
},
{
  name: 'Vulkan Arena',
  body: 'Konsertlokale midt på Vulkan ved Mathallen.',
  position: {lat: 59.922441, lng: 10.751126},
  type: 'activity'
},
{
  name: 'Fyrhuset kuba',
  body: 'I det lille oransje huset i Kubaparken ligger Fyrhuset Kuba. Her kan du slukke tørsten med en av våre mange ølsorter, ta med venner på en runde poker eller et ta slag shuffle i andre etasje.',
  position: {lat: 59.923619, lng: 10.751771},
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
