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
    tourCluster.clearLayers();
    let tourResponse = await axios.get('TOURISM.geojson');
        let data = tourResponse.data.features
            for (each of data){
            let lat = each.geometry.coordinates[1];
            let lng = each.geometry.coordinates[0];
            let tourIcon = L.icon({
                iconUrl:'images/tour.png',
                iconSize: [40, 40],
            });
            let tourMarker = L.marker([lat, lng], {icon:tourIcon});
            tourMarker.bindPopup(`
            <h5>${each.properties.Name}</h5>
            <ul><span>Opening Hours: ${each.properties["Opening Hours"]}</span></ul>
            <ul><span>Description: ${each.properties.description}</span></ul>
            
            `)
            tourMarker.addTo(tourCluster);
    }
    };
    async function showFoodSearch(response, iconUrl, foodCluster){
        let foodSearch = document.querySelector("#search-results");
        for (let foodlatlng of response){
            let resultlatlng = [
                foodlatlng.geocodes.main.latitude,
                foodlatlng.geocodes.main.longitude,
            ];
            let foodIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [40, 40],
            });
            let foodMarker = L.marker((resultlatlng), {icon:foodIcon});
            foodMarker.bindPopup(`
            <h5><span>${foodlatlng.name}</span></h5>
            <ul><span>Address: ${foodlatlng.location.formatted_address}</span></ul>
            `);
        foodMarker.addTo(foodCluster);
        let foodResultElement = document.createElement('div');
        foodResultElement.className = 'foodlist'
        foodResultElement.innerHTML = foodlatlng.name
        foodResultElement.addEventListener('click', function () {
            map.flyTo(resultlatlng, 17);
            foodMarker.openPopup();
        });
        foodMarker.addEventListener('click', function () {
            map.flyTo(resultlatlng, 17);
            foodMarker.openPopup();
        
        });
        
        }
        foodSearch.appendChild(foodResultElement);
        foodCluster.addTo(map);
    };

    async function showTaxi(){
        
        let taxiResponse = await axios.get('lta-taxi-stop-geojson.geojson');
            let data = taxiResponse.data.features
                for (each of data){
                let lat = each.geometry.coordinates[1];
                let lng = each.geometry.coordinates[0];
                let taxiIcon = L.icon({
                    iconUrl:'images/taximark.png',
                    iconSize: [40, 40],
                });
                let taxiMarker = L.marker([lat, lng], {icon:taxiIcon});
                taxiMarker.bindPopup(`
                <h5>Taxi Stop</h5>
                
                `)
                taxiMarker.addTo(taxiCluster);
        }
        };

        async function showHawkerSearch(response, iconUrl, hawkerCluster){
            let hawkerSearch = document.querySelector("#search-results");
            for (let foodlatlng of response){
                let resultlatlng = [
                    foodlatlng.geocodes.main.latitude,
                    foodlatlng.geocodes.main.longitude,
                ];
                let foodIcon = L.icon({
                    iconUrl: iconUrl,
                    iconSize: [40, 40],
                });
                let foodMarker = L.marker((resultlatlng), {icon:foodIcon});
                foodMarker.bindPopup(`
                <h5><span>${foodlatlng.name}</span></h5>
                <ul><span>Address: ${foodlatlng.location.formatted_address}</span></ul>
                `);
            foodMarker.addTo(hawkerCluster);
            let foodResultElement = document.createElement('div');
            foodResultElement.className = 'foodlist'
            foodResultElement.innerHTML = foodlatlng.name
            foodResultElement.addEventListener('click', function () {
                map.flyTo(resultlatlng, 17);
                foodMarker.openPopup();
            });
            foodMarker.addEventListener('click', function () {
                map.flyTo(resultlatlng, 17);
                foodMarker.openPopup();
            
            });
            
            }
            hawkerSearch.appendChild(foodResultElement);
            hawkerCluster.addTo(map);
        };

// async function loadHawker(){
//     let hawkerResponse = await axios.get('hawker-centres-geojson.geojson');
//     let hawkerLayer = L.geoJson(hawkerResponse.data,{
//         onEachFeature: function(feature,layer){
//             console.log(feature);
//             layer.addEventListener('click', function(){
//             let divElement = document.createElement('div');
//             divElement.innerHTML = feature.properties.Description;
//             let columns = divElement.querySelectorAll('td');
//             let hawkerName = columns[0].innerHTML;
//             let address = columns[1].innerHTML;
//             layer.bindPopup(`<h5>${hawkerName}</h5><ul>${address}</ul>`);
//         })
//         }   
//     })
//     hawkerLayer.addTo(map);
//     // return hawkerLayer;
// }
// loadHawker();