const mymap = L.map('mapid').setView([44.502379, 11.338829], 13);

mapLink =
    '<a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>';
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 39,
    clickable: true
}).addTo(mymap);