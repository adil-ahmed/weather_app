const request = require('request');

var getWeather = (lat,lng,callBack) => {
    request({
        url : `https://api.darksky.net/forecast/9845ecc23327bfb860ba6a7458b7c50e/${lat},${lng}`,
        json : true
    },
    (error,response,body) => {
    
        if(error)
        {
            callBack('Unable to connect to forecast.io weather');
        }
        else if(response.statusCode === 400)
        {
            callBack('Unable to fetch weather');
        }
        else if(response.statusCode === 200) 
        {
            callBack(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
            //console.log(body.currently.temperature);
        }
    });

}

module.exports.getWeather = getWeather;
