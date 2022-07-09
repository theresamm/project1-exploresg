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


// async function searchHawker(lat, lng, hawker){
//     let ll = lat+","+lng;
//     let hawkerResponse = await axios.get(BASE_API_URL + "/places/search",{
//         "headers": headers,
//         "params":{
//             'll':ll,
//             'query':hawker,
//             'limit':50,
//        },
//     });
//     return hawkerResponse.data;
// }
