class Animal{
	constructor(name){
		this.name = name;
	}

	sayName(){
		console.log("My name is:" + this.name);
	}
}

class Programmer extends Animal{
	constructor(name){
		//直接调用父类构造器进行初始化
		super(name);
	}
	program(){
		console.log("I'm programming");
	}
}

var animal = new Animal("dummy"),
wangdejun = new Programmer("wangdejun")

animal.sayName();
wangdejun.sayName();
wangdejun.program()
