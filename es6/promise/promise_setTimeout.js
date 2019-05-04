var promise1 = new Promise(function(resolve, reject){
    let data = 1
    setInterval(function(){
        resolve("牛逼"+ data);
        data ++;
    }, 1500)
})

promise1.then(function(data){
    console.log(data);
    return new Promise(function(resolve, reject){
        resolve(data)
    })
}).then(function(data){
    console.log(data);
}).then(function(data){
    console.log(data);
})