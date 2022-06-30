function main() {
    function init(){
         let map = initMap();

         let searchResultLayer = L.layerGroup();
         searchResultLayer.addTo(map);

         window.addEventListener("DOMContentLoaded", function (){
            document.querySelector("#btnsearch").addEventListener('click', async function(){
                searchResultLayer.clearLayers();
                let query = document.querySelector("#textSearch").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);
                document.querySelector("#search-results").innerHTML = "";
                for (let result of data.results){
                    addSearchResult(map, result, searchResultLayer);
                }
            })
            document.querySelector("#minSearchBtn").addEventListener('click',function(){
                let searchContainerElement = document.querySelector("#search-container");
                let currentDisplay = searchContainerElement.style.display;
                if (! currentDisplay || currentDisplay == 'none'){
                    searchContainerElement.style.display = 'block';
                } else {
                    searchContainerElement.style.display = 'none';
                }
            })
        })
    }
    
     init();
 }
 main();
 
 