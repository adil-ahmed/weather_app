const request = require('request');
const yargs = require('yargs');
const geocode = require('./Geocode/geocode');
const weather = require('./dynamicWeather/dWeather');
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage)
            {
                console.log(errorMessage);
            }
            else
            {
                //console.log(JSON.stringify(weatherResults,undefined,2));
                console.log(`Current temperature is ${weatherResults.temperature}.Its feel like ${weatherResults.apparentTemperature}`)
            }
        
        });
    }


});


//9845ecc23327bfb860ba6a7458b7c50e


// var encodedAddress = encodeURIComponent(argv.address);

// console.log(argv);
// console.log(encodedAddress);

// request({
//     //url : 'https://maps.googleapis.com/maps/api/geocode/json?address=3000%20chowhatta%20sylhet',
//     url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json : true
// }, (error, response, body) => { 
//    // console.log(body);
   
//    // console.log(JSON.stringify(body, undefined, 2));
//     //console.log(JSON.stringify(error, undefined, 2));
//     //console.log(JSON.stringify(response, undefined, 2));

//     ///if our url is wrong then console will show wrong ... else it will print null...

//     if(error)
//     {
//         console.log('Unable to connect to google server');
//     }
//     else if(body.status === 'ZERO_RESULTS')
//     {
//         console.log('Unable to find that address');
//     }

//     else if(body.status === 'OK')
//     {
//         console.log(`Address : ${body.results[0].formatted_address}`);
//         console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
//         console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
//     }
//     else {
//         console.log('Wrong address');
//     }

    
// });