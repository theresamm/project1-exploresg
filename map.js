function initMap() {
    let singapore = [1.3521, 103.8198];
    let map = L.map("map")
    map.setView(singapore, 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGhlcmVzYW1tIiwiYSI6ImNsNHpsNXE3YzMzOWwzY3M4YnBuNTF5Z2gifQ.AZkPiqdHAZOIHtrFHVmjAQ'
    }).addTo(map);
    return map; 
}
let pointIcon = L.icon({
    iconUrl:'images/point.png',
    iconSize: [30, 40],
    iconAnchor: [10, 25],
    popupAnchor: [-2, -29],
});

async function showTour(){
let tourResponse = await axios.get('TOURISM.geojson');
    console.log(tourResponse.data)
    let data = tourResponse.data.features
        for (each of data){
        let lat = each.geometry.coordinates[1];
        let lng = each.geometry.coordinates[0];
        L.marker([ lat, lng ]).addTo(tourLayer);
}
}


