function add(promiseX, promiseY){
    return Promise.all([promiseX, promiseY]).then(function(values){
	    return values[0]+values[1]
    });
}


function fetchX(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
	    resolve(12);   
	},5000)
    });
}

function fetchY(){
    return new Promise(function(resolve, reject){
	    setTimeout(function(){
		    resolve(13)
	    },2000)
    })
}

console.log(add(fetchX(), fetchY()));
