//Shaple class 
class Shape{
    constructor(id, x, y){
        this.id = id;
        this.move(x, y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `Shape(${ this.id })`
    }
}
// Rectangle class inherit from Shape class
class Rectangle extends Shape{
    constructor(id,x,y,width,height){
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
    toString(){
        return "Rectangle > "+super.toString();
    }
}

// Circle class inheriting from Shape class also
class Circle extends Shape{
    constructor(id,x,y,radius){
        super(id, x, y);
        this.radius = radius;
    }
    toString(){
        return "Circle > " + super.toString();
    }
}
// BorderCircle class inheriting from Circle class itself
class BorderCircle extends Circle{
    constructor(id, x, y, radius, borderWidth){
        super(id, x, y, radius);
        this.borderWidth = borderWidth;
    }
    toString(){
        return "BorderCircle > " + super.toString();
    }
}

//generate 3 instances from ShapeClass, RectangleClass, CircleClass respectively
let shape = new Shape(1,123,123324)
let rectangle = new Rectangle(2,123,1233,1000,2000);
let circle = new Circle(3,800,600,16.5);
let bordercircle = new BorderCircle(3,800,600,16.5, 2)
console.log(shape);
console.log(rectangle);
console.log(circle);
console.log(bordercircle.toString())

//iterate the attributes in the circle instance created above.
//*NOTICE*/ for...of(new in ES6) cannot iterate attrs in a Object intance which is not iterable.
for(i in circle){
    console.log(circle[i]);
}
// for...of can loop the attrs in a iterable Object(e.g. an array)
var iterableArray = ['wang', 'de', 'jun'];
for(x of iterableArray){
    console.log(x);
}