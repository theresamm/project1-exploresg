let map;
let tourLayer = L.layerGroup();
let resultLayer = L.layerGroup();
let tourCluster = L.markerClusterGroup();


function main() {
    function init(){
         let map = initMap();

         let searchResultLayer = L.layerGroup();
         let searchCluster = L.markerClusterGroup();
         searchCluster.addTo(map);

         window.addEventListener("DOMContentLoaded", function (){
            document.querySelector("#btnsearch").addEventListener('click', async function(){
                searchResultLayer.clearLayers();
                let query = document.querySelector("#textSearch").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);
                document.querySelector("#search-results").innerHTML = "";
                for (let result of data.results){
                    addSearchResult(map, result, searchCluster);
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
    let tourBtn = document.querySelector("#tourSearchBtn");
    tourBtn.addEventListener('click', async function(){
        showTour();
        clearMap();
        tourCluster.addTo(map);
    });
    
    // let searchButton = document.querySelector("#btnsearch");
    // searchButton.addEventListener('click', async function(){
    // blankResult();
    // let blankField = false;
    // let inputField = document.querySelector("#textSearch").value;
    // if(!inputField){blankField=true;}
    // if(blankField){
    //     let checking = document.querySelector("#searchCheck");
    //     checking.innerHTML = "Please enter a valid text";
    // }else{
    //     clearMap();
        
    // }
    // addSearchResult();

    // });
    


    }

init();


 }
 main();

 
