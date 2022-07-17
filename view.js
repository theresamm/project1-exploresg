function addSearchResult(map, result, searchCluster) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker((latlng), {icon:pointIcon});
    resultMarker.bindPopup(`
        <h5><span>${result.name}</span></h5>
        <ul><span>${result.location.formatted_address}</span></ul>
    `)

    resultMarker.addTo(searchCluster);

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



function blankResult(){
    let searchResult = document.querySelectorAll(".search-result");
    for (let a of searchResult){
        a.style.display = "none";
    }
};
