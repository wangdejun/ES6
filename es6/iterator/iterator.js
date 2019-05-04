function makeIterator(arr){
    var index = 0;
    return {
        next:function(){
            return index < arr.length ? {
                value:arr[index++],
                done:false
            }:{
                done:true
            }
        }
    }
}

var x = makeIterator([1,2,3,4])

console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().done)
console.log(x.next().done)