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

// async function loadTour(){
//     let tourResponse = await axios.get('TOURISM.geojson');
//     let tourLayer = L.geoJson(tourResponse.data,{
//         onEachFeature:function(feature,layer){
//             let newDiv = document.createElement('div');
//             newDiv.innerHTML = feature.properties.Name;
//             layer.bindPopup(`
//             <h5>${feature.properties.Name}</h5>
//             <ul><span>${feature.properties["Opening Hours"]}</span></ul>
//             <ul><span>${feature.properties.description}</span></ul>
//             `);
//         }   
//     })
//     tourLayer.addTo(tourCluster);
//     return tourLayer;
// }


async function showTour(){
    tourCluster.clearLayers();
    let tourResponse = await axios.get('TOURISM.geojson');
        let data = tourResponse.data.features
            for (each of data){
            let lat = each.geometry.coordinates[1];
            let lng = each.geometry.coordinates[0];
            let tourIcon = L.icon({
                iconUrl:'images/tour.png',
                iconSize: [30, 40],
            });
            let tourMarker = L.marker([lat, lng], {icon:tourIcon});
            tourMarker.bindPopup(`
            <h5>${each.properties.Name}</h5>
            <ul><span>${each.properties["Opening Hours"]}</span></ul>
            <ul><span>${each.properties.description}</span></ul>
            
            `)
            tourMarker.addTo(tourCluster);
    }
        tourMarker.addEventListener('click', function () {
        map.flyTo([lat, lng], 17);
        tourMarker.openPopup();
    });
    }
