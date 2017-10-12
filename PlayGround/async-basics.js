console.log(`Starting app`);

setTimeout(() => {
    console.log("Inside of callBack");
},5000);

setTimeout(() => {
    console.log("Inside of callBack without delay");
},0);
console.log(`Ending up`);