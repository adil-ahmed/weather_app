var getUser = ((id, callBack) => {
    var userPerson = {
        id : id,
        name : 'Adil'
    };
    //callBack(userPerson);
    console.log('Delaying');
    setTimeout(() => {
        callBack(userPerson);

    },2000);

}); 

getUser(31, (user) => {
    console.log(user);
});