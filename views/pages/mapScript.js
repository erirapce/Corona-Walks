var mymap = L.map('mapid').setView([52.52, 13.41], 13);
            L.tileLayer('images/Map.png', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              maxZoom: 18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

var circle1 = L.circle([52.52, 13.41],{
    color: 'cyan',
    fillColor: 'cyan',
    fillOpacity: 0.5,
    radius: 75
}).addTo(mymap);
circle1.bindPopup("Karl-Liebknecht-Str. 13, 10178 Berlin Deutschland");

var circle2 = L.circle([52.51, 13.40],{
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 75
}).addTo(mymap);
circle2.bindPopup("Berliner Innenstadt, 10178 Berlin, Deutschland");

var circle3 = L.circle([52.53, 13.40],{
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.5,
  radius: 75
}).addTo(mymap);
circle3.bindPopup("Rosenthaler Str. 50, 10178 Berlin, Deutschland");

var circle4 = L.circle([52.509, 13.42],{
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.5,
  radius: 75
}).addTo(mymap);
circle4.bindPopup("Grunerstraße 20, 10179 Berlin, Deutschland");

var circle5 = L.circle([52.515, 13.43],{
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.5,
  radius: 75
}).addTo(mymap);
circle5.bindPopup("Karl-Marx-Allee 8, 10178 Berlin, Deutschland");
