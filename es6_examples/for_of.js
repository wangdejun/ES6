var someArray = [ "a", "b", "c" ];
 
for (v of someArray) {
    console.log(v);//输出 a,b,c
}

for (x in someArray) {
	console.log(x); //输出 0,1,2
}