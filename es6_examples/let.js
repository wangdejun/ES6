a = true;
if(a){
	let b = 12;
	var c = 12;
}
console.log(c) //12
try{
	console.log(b) //"undefined"
}catch(e){
	console.log(e.toString())
}