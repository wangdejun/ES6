//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
        console.log(this);
    }
};
//可以直接通过给对象的__proto__属性添加对象的方式产生继承关系；
var worker = {
	//设置此对象的原型为human,相当于继承human
    __proto__: human, 
    company: 'freelancer',
    work() {
        console.log('working...');
        console.log(this);
    }
};
human.breathe();//输出 'breathing...'
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’
worker.work()