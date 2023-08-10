const searchCity = document.getElementById('searchCity')
const displayCity = document.getElementById('displayCity')
const displayCountry = document.getElementById('displayCountry')
const temperature = document.getElementById('temperature')
const myKeyAPI = `ac577a7e-a0ac-48bb-8e31-b876d31b23Y4c`
// https://www.iqair.com/dashboard/api
const countries = `http://api.airvisual.com/v2/countries?key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
const regions = `http://api.airvisual.com/v2/states?country=france&key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
const cities = `http://api.airvisual.com/v2/cities?state=Ile-de-France&country=france&key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
const url = `http://api.airvisual.com/v2/cities?state=Ile-de-France&country=france&key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
const city = `http://api.airvisual.com/v2/city?city=montreuil&state=Ile-de-France&country=france&key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
const geo = `http://api.airvisual.com/v2/nearest_city?key=ac577a7e-a0ac-48bb-8e31-b876d31b234c`
 
const listCities = fetch(geo)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

console.log("DEBUT :",searchCity.value)

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