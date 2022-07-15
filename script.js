let map;
let singapore;
let tourLayer = L.layerGroup();
let resultLayer = L.layerGroup();
let tourCluster = L.markerClusterGroup();
let searchCluster = L.markerClusterGroup();



function main() {
    function init(){
         let map = initMap();

         
         let searchCluster = L.markerClusterGroup();
         searchCluster.addTo(map);

         window.addEventListener("DOMContentLoaded", function (){
            document.querySelector("#btnsearch").addEventListener('click', async function(){
                searchCluster.clearLayers();
                tourCluster.clearLayers();
                let query = document.querySelector("#textSearch").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);
                document.querySelector("#search-results").innerHTML = "";
                for (let result of data.results){
                    addSearchResult(map, result, searchCluster);
                }
            })
            
    
            
    })
    let tourBtn = document.querySelector("#tourSearchBtn");
    tourBtn.addEventListener('click', async function(){
        tourCluster.clearLayers();
        searchCluster.clearLayers();
        // clearMap();
        blankResult();
        showTour();
        
        tourCluster.addTo(map);
        
    });
   
    
//     let searchButton = document.querySelector("#btnsearch");
//     searchButton.addEventListener('click', async function(){
//     // blankResult();
//     let blankField = false;
//     let inputField = document.querySelector("#textSearch").value;
//     if(!inputField){blankField=true;}
//     let check = document.querySelector("#searchCheck");
//     check.innerHTML='';
//     if(blankField){
//     check.innerHTML += "Please enter a valid text";
//     }
//     if(blankfield){
//         check.style.display = 'block';
    
//     }
// });

    // }else{
    //     clearMap();
        
    // }
    // addSearchResult();

    // });
    


    }

init();


 }
 main();

 
