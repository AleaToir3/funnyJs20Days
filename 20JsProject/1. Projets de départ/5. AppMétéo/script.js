const searchCity = document.getElementById('searchCity')
const displayCity = document.getElementById('displayCity')
const displayCountry = document.getElementById('displayCountry')
const temperature = document.getElementById('temperature')
const img = document.getElementById('img')
// https://www.iqair.com/dashboard/api
const countries = `countries?`
const regions = `states?country=france&`
const cities = `cities?state=Ile-de-France&country=france&`
const url = `cities?state=Ile-de-France&country=france&`
const city = `city?city=montreuil&state=Ile-de-France&country=france&`
const geo = `nearest_city?`

const baseUrl = "http://api.airvisual.com/v2/"
const keyApi ="key=ac577a7e-a0ac-48bb-8e31-b876d31b234c"

if(searchCity.value){

}else {
    fetch(baseUrl+geo+keyApi)
    .then(data=> data.json())
    .then(data=>{
        console.log(data)
        const { data: { city ,state:country,current: { weather: { ic:image,tp } }} } = data;
        displayCity.textContent = city
        displayCountry.textContent = country
        temperature.textContent = tp
        img.src = `./img/${image}.png` 
    })

}

function data(){}
//     <label for="pays">Sélectionnez un pays :</label>
// <select id="pays">
//   <option value="france">France</option>
//   <option value="espagne">Espagne</option>
//   <option value="italie">Italie</option>
//   <option value="allemagne">Allemagne</option>
// </select>


// forecasts": [ //object containing forecast information
//       {
//         "ts": "2017-02-01T03:00:00.000Z",  //timestamp
//         "aqius": 21, //AQI value based on US EPA standard
//         "aqicn": 7, //AQI value based on China MEP standard
//         "tp": 8, //temperature in Celsius
//         "tp_min": 6, //minimum temperature in Celsius
//         "pr": 976,  //atmospheric pressure in hPa
//         "hu": 100, //humidity %
//         "ws": 3, //wind speed (m/s)
//         "wd": 313, //wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
//         "ic": "10n" //weather icon code, see below for icon index
//       },