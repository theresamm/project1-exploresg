function main() {
    function init(){
         let map = initMap();

         let searchResultLayer = L.layerGroup();
         searchResultLayer.addTo(map);

         window.addEventListener("DOMContentLoaded", function (){
            document.querySelector("#btnsearch").addEventListener('click', async function(){
                let query = document.querySelector("#textSearch").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);
                for (let result of data.results){
                    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
                    let resultMarker = L.marker(latlng);
                    resultMarker.bindPopup(`
                        <h2>${result.name}</h2>
                    `)
                    resultMarker.addTo(searchResultLayer);
                }
            })
         })
    }
    
     init();
 }
 main();
 