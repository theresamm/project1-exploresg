let map;
let mapCen;
let singapore = [1.3521, 103.8198];
let tourLayer = L.layerGroup();
let foodLayer = L.layerGroup();
let resultLayer = L.layerGroup();
let tourCluster = L.markerClusterGroup();
let searchCluster = L.markerClusterGroup();
let foodCluster = L.markerClusterGroup();
let taxiCluster = L.markerClusterGroup();
let hawkerCluster = L.markerClusterGroup();


function main() {
    function init() {
        let map = initMap();


        let searchCluster = L.markerClusterGroup();
        searchCluster.addTo(map);

        window.addEventListener("DOMContentLoaded", function () {
            document.querySelector("#btnsearch").addEventListener('click', async function () {
                searchCluster.clearLayers();
                tourCluster.clearLayers();
                foodCluster.clearLayers();
                hawkerCluster.clearLayers();
                taxiCluster.clearLayers();
                let query = document.querySelector("#textSearch").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);
                document.querySelector("#search-results").innerHTML = "";
                for (let result of data.results) {
                    addSearchResult(map, result, searchCluster);
                }
            })

        })
        let tourBtn = document.querySelector("#tourSearchBtn");
        tourBtn.addEventListener('click', async function () {
            foodCluster.clearLayers();
            tourCluster.clearLayers();
            searchCluster.clearLayers();
            hawkerCluster.clearLayers();
            taxiCluster.clearLayers();
            map.setView(singapore, 12);
            blankResult();
            showTour();

            tourCluster.addTo(map);

        });
        let foodBtn = document.querySelector("#foodSearchBtn");
        foodBtn.addEventListener('click', async function () {
            foodCluster.clearLayers();
            tourCluster.clearLayers();
            searchCluster.clearLayers();
            hawkerCluster.clearLayers();
            taxiCluster.clearLayers();
            map.setView(singapore, 12);
            blankResult();
            mapCen = map.getBounds().getCenter();
            let response = await searchFood(
                mapCen.lat,
                mapCen.lng,
                "food"
            );
            showFoodSearch(response.results, 'images/food.png', foodCluster);

            foodCluster.addTo(map);
        });

        let taxiBtn = document.querySelector("#taxiSearchBtn");
        taxiBtn.addEventListener('click', async function () {
            foodCluster.clearLayers();
            tourCluster.clearLayers();
            searchCluster.clearLayers();
            hawkerCluster.clearLayers();
            taxiCluster.clearLayers();
            map.setView(singapore, 12);
            blankResult();
            showTaxi();

            taxiCluster.addTo(map);

        });
        let hawkerBtn = document.querySelector("#hawkerSearchBtn");
        hawkerBtn.addEventListener('click', async function () {
            foodCluster.clearLayers();
            tourCluster.clearLayers();
            searchCluster.clearLayers();
            hawkerCluster.clearLayers();
            taxiCluster.clearLayers();
            map.setView(singapore, 12);
            blankResult();
            mapCen = map.getBounds().getCenter();
            let response = await searchHawker(
                mapCen.lat,
                mapCen.lng,
                "hawker"
            );
            showHawkerSearch(response.results, 'images/hawkermark.png', hawkerCluster);

            hawkerCluster.addTo(map);
        });

        let resetButton = document.querySelector("#resetBtn");
        resetButton.addEventListener('click', async function () {
            foodCluster.clearLayers();
            tourCluster.clearLayers();
            searchCluster.clearLayers();
            hawkerCluster.clearLayers();
            taxiCluster.clearLayers();
            map.setView(singapore, 12);
            blankResult();
        });

      let searchButton = document.querySelector("#btnsearch");
            searchButton.addEventListener('click', async function(){
            blankResult();
            let blankField = false;
            let inputField = document.querySelector("#textSearch").value;
            if(!inputField){blankField=true;}
            let check = document.querySelector("#searchCheck");
            check.innerHTML='';
            if(blankField){
            check.innerHTML += "Please enter a valid text";
            }
            if(blankfield){
                check.style.display = 'block';

            }
        });

        // }else{
        //     clearMap();

        // }
        // addSearchResult();

        // });

    





        //     let searchButton = document.querySelector("#btnsearch");
        //     searchButton.addEventListener('click', async function(){
        //     blankResult();
        //     let blankField = false;
        //     let inputField = document.querySelector("#textSearch").value;
        //     if(!inputField){blankField=true;}
        //     if(blankField){
        //     let check = document.querySelector("#searchCheck");
        //     check.innerHTML = "Please enter a valid text";
        //     // blankResult();
        //     }else{
        //         foodCluster.clearLayers();
        //         tourCluster.clearLayers();
        //         searchCluster.clearLayers();
        //         hawkerCluster.clearLayers();
        //         taxiCluster.clearLayers();
        //         map.setView(singapore, 12);
        //         blankResult();
        //         mapCen = map.getBounds().getCenter();
        //         let response = await search(
        //         mapCen.lat,
        //         mapCen.lng,
        //         inputField,
        //         15
        //     );
        //     if(response.results.length==0){blankResult();}
        // }
        // addSearchResult();
            // if(blankfield){
            //     check.style.display = 'block';

        //     }else{
        //         foodCluster.clearLayers();
        //         tourCluster.clearLayers();
        //         searchCluster.clearLayers();
        //         hawkerCluster.clearLayers();
        //         taxiCluster.clearLayers();
        // }
    // });
            
      
    
        



    }

    init();


}
main();


