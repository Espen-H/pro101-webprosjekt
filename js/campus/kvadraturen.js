var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 59.911150, lng: 10.744919},
   zoom: 17
 });
};

var $myGroup = $('#myGroup');
$myGroup.on('show.bs.collapse','.collapse', function() {
$myGroup.find('.collapse.in').collapse('hide');
});
var vulkanPointer = {lat: 59.923356, lng: 10.752187};
var fjerdingenPointer = {lat: 59.9161627, lng: 10.7591278};
var brenneriveienPointer = {lat: 59.9202059, lng: 10.7524563};
var kvadraturenPointer = {lat: 59.9110907, lng: 10.7445634};

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
 fastfood: {
  url: "img/fastfood.png", // url
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
};

var place=[
{
  name: 'Outland',
  body: 'Test',
  position: {lat: 59.911597, lng: 10.744900},
  type: 'shopping'
},
{
  name: 'Subway',
  body: 'by',
  position: {lat: 59.911612, lng: 10.745246},
  type: 'fastfood'
},
{
  name: 'Espresso House',
  body: 'Test',
  position: {lat: 59.919011, lng: 10.781915},
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
document.getElementById('shoppingRadio').addEventListener('change', function() {  onChangeHandler(icons.shopping); });
document.getElementById('activityRadio').addEventListener('change', function() {  onChangeHandler(icons.activity); });
}

function updateFilters(){

}


var $myGroup = $('#myGroup');
$myGroup.on('show.bs.collapse','.collapse', function() {
$myGroup.find('.collapse.in').collapse('hide');
});
