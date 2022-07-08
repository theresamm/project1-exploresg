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
