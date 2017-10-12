const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {
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
                reject('Unable to connect to google server');
            }
            else if(body.status === 'ZERO_RESULTS')
            {
                //console.log('Unable to find that address');
                reject('Unable to find that address');
            }
        
            else if(body.status === 'OK')
            {
                resolve({
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
                reject('Wrong address');
            }
        
            
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});