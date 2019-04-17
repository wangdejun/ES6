const getJson = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = function () {
            if (this.readyState !== 4) {return;}
            if (this.state === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });
    return promise;
};


getJson('https://modesens.com/designer/adidas/?format=json')
.then(function(value) {
    console.log(value);
}, function(error) {
    console.error('出错了', error);
});