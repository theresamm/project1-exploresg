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
            'query':query
        
        }
    })
    return response.data;
}