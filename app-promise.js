const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
    a: {
        demand : true,
        alias : 'address',
        description : 'Address to fetch weather for',
        string : true

    }

})
.help()
.alias('help', 'h')
.argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {

    if(response.data.status === 'ZERO_RESULTS')
    {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL =  `https://api.darksky.net/forecast/9845ecc23327bfb860ba6a7458b7c50e/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} but feels like ${apparentTemperature}`);
}).catch((errorMessage) => {
    if(errorMessage.code === 'ENOTFOUND')
    {
        console.log(`Can not connect to API servers`);
    }
    else
    {
        console.log(errorMessage.message);
    }
    
});
