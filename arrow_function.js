var array = [1,2,3]

array.forEach(function(v, i, a){
	console.log(v,i,a)
})

array.forEach(v => console.log(v))

var array_items = [
	[1,2,3,4,5],
	[6,7,8,9,10]
]

array_items.forEach((i,v)=>console.log(i,v))