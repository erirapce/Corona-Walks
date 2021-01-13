var mymap = L.map('mapid').setView([52.52, 13.41], 13);
            L.tileLayer('images/Map.png', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              maxZoom: 18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

var circle = L.circle([52.52, 13.41],{
    color: 'cyan',
    fillColor: 'cyan',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
circle.bindPopup("Rosenthaler Str. 51, 10178 Berlin, Deutschland");
