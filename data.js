const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3oPWCqp/KrOvP2k17DQSJgN9+gFHhlSkl1CcobbFQt48=";
const headers = {
    "Accept":'application/json',
    "Authorization":API_KEY
}
async function search(lat, lng, query){
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL + "/places/search",{
        "headers": headers,
        "params":{
            'll':ll,
            'query':query,
            'radius':15000,
            'limit':50,
        }
    })
    return response.data;
}

async function searchFood(lat, lng, food){
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL + "/places/search",{
        "headers": headers,
        "params":{
            'll':ll,
            'query':food,
            'radius':10000,
            'categories':13000,
            'limit':50,
        }
    })
    return response.data;
}
async function showFoodSearch(foodResponse, iconUrl, foodLayer){
    let foodSearch = document.querySelector('#search-results');
    for (let foodlatlng of foodResponse){
        let resultlatlng = [
            foodlatlng.geocodes.main.latitude,
            foodlatlng.geocodes.main.longitude,
        ];
        let foodIcon = L.icon({
            iconUrl:iconUrl,
            iconSize: [30, 40],
        });
        let foodMarker = L.marker(resultlatlng, {icon:foodIcon});
        foodMarker.bindPopup(`
        <h5><span>${foodlatlng.name}</span></h5>
        <ul><span>${foodlatlng.location.formatted_address}</span></ul>
    `)
    foodMarker.addTo(foodLayer);
    let foodResult = document.createElement('div');
    foodResult.innerHTML = `<div>${foodlatlng.name}<div>`
    foodResult.className = "food-list"
    foodResult.addEventListener("click",function(){
        map.flyTo(resultlatlng, 17);
        foodMarker.openPopup();
    });
    foodMarker.addEventListener("click",function(){
        map.flyTo(resultlatlng, 17);
        foodMarker.openPopup();
    
    });
    foodSearch.appendChild(foodResult);
    };
    foodLayer.addTo(map);
};
