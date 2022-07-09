function addSearchResult(map, result, searchResultLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker((latlng), {icon:pointIcon});
    resultMarker.bindPopup(`
        <h4>${result.name}</h4>
    `)

    resultMarker.addTo(searchResultLayer);

    let resultElement = document.createElement('div');
    resultElement.className = 'search-result';
    resultElement.innerHTML = result.name;
    resultElement.addEventListener('click', function () {
        map.flyTo(latlng, 17);
        resultMarker.openPopup();
    });
    resultMarker.addEventListener('click', function () {
        map.flyTo(latlng, 17);
        resultMarker.openPopup();
    });
    document.querySelector("#search-results").appendChild(resultElement);
}

async function showTour(){
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
            tourMarker.bindPopup(`<h4>${each.properties.Name}</h4>`)
            tourMarker.addTo(tourCluster);
    }
    }
    