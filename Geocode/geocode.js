const request = require('request');

var geocodeAddress = (address, callBack) => {
    var encodedAddress = encodeURIComponent(address);
    
    console.log(encodedAddress);
    
    request({
        //url : 'https://maps.googleapis.com/maps/api/geocode/json?address=3000%20chowhatta%20sylhet',
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json : true
    }, (error, response, body) => { 
       // console.log(body);
       
       // console.log(JSON.stringify(body, undefined, 2));
        //console.log(JSON.stringify(error, undefined, 2));
        //console.log(JSON.stringify(response, undefined, 2));
    
        ///if our url is wrong then console will show wrong ... else it will print null...
    
        if(error)
        {
            //console.log('Unable to connect to google server');
            callBack('Unable to connect to google server');
        }
        else if(body.status === 'ZERO_RESULTS')
        {
            //console.log('Unable to find that address');
            callBack('Unable to find that address');
        }
    
        else if(body.status === 'OK')
        {
            callBack(undefined, {
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng


            });
            // console.log(`Address : ${body.results[0].formatted_address}`);
            // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        }
        else {
            //console.log('Wrong address');
            callBack('Wrong address');
        }
    
        
    });
}

module.exports.geocodeAddress = geocodeAddress;