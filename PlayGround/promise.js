var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number')
            {
                resolve(a+b);
            }
            else
            {
                reject('Arguments must be number');
            }
        },1500);
    });
};
// var somePromise = new Promise ((resolve,reject) => {

//     setTimeout(() => {
//         //resolve('Yes. It worked');
//         reject('Unable to fulfill promise');
//     },2500);
    
// });

// somePromise.then((message) => {
//     console.log(`Success : ${message}`);
// }, (errorMessage) => {
//     console.log(`Error : ${errorMessage}`);
// });


//here different error message for both part

// asyncAdd(5,7).then((result) => {
//     console.log(`Result is ${result}`);
//     return asyncAdd(result,33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((result) => {
//     console.log(`45 === ${result}`);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });


//Now single error for both part

asyncAdd(5,7).then((result) => {
    console.log(`Result is ${result}`);
    return asyncAdd(result,33);
}).then((result) => {
    console.log(`45 === ${result}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
}) ;