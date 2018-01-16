var obj = {
    num:3,
    getnum:function(){
        return this.num;
    }
}
console.log(obj.getnum());

var obj1 = {
    num:4,
    getnum1:function(){
        setTimeout(() => {
            console.log(this.num);
        }, 1000);
    }
}

obj1.getnum1()
console.log(this);