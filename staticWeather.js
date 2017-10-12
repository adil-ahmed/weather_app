const request = require('request');
request({
    url : 'https://api.darksky.net/forecast/9845ecc23327bfb860ba6a7458b7c50e/24.9172089,91.83189879999999',
    json : true
},
(error,response,body) => {

    if(error)
    {
        console.log('Unable to connect to forecast.io weather');
    }
    else if(response.statusCode === 400)
    {
        console.log('Unable to fetch weather');
    }
    else if(response.statusCode === 200) 
    {
        console.log(body.currently.temperature);
    }
});