function addSearchResult(map, result, searchResultLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker((latlng), {icon:foodIcon});
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

document.querySelector("#search-results").addEventListener('click', async function loadGeoJson(){
    let response = await axios.get('tour.geojson');
    console.log(response.data.features)
    let tourLayer = response.data.features
    let markerCluster = L.markerClusterGroup();
    for (each of tourLayer){
        let lat = each.geometry.coordinates[1];
        let lng = each.geometry.coordinates[0];
        L.marker([lat, lng]).addTo(markerCluster)
    }
    markerCluster.addTo(map);
        })