ES6新特性纵览及与ES5比较
<a href='http://es6-features.org/'>来自es6-features.org<a>

### 1常量
* 常量
  * 支持常量(不可改变量)，换句话说，变量一旦被定义，则不能被重新赋值。注意，只是变量本身不能够被改变，而常量指向的对象可以改变的。
    ```js
    const PI = 3.141593
    PI > 3.0
    ```

### 2作用域
* 块作用域变量
  * 没有变量上举的块级作用域变量(或常量). 
    ```js
    for (let i = 0; i < a.length; i++) {
        let x = a[i];
        …
    }
    for (let i = 0; i < b.length; i++) {
        let y = b[i];
        …
    }

    let callbacks = [];
    for (let i = 0; i <= 2; i++) {
        callbacks[i] = function () { return i * 2; };
    }
    callbacks[0]() === 0;
    callbacks[1]() === 2;
    callbacks[2]() === 4;
    ```
* 块作用域函数
  * Block-scoped function definitions.
    ```js
      {
        function foo(){ return 1;}
        foo()===1;
        {
          function foo(){ return 2;}
          foo()===2;
        }
        foo()===1;
      }
    ```
### 3箭头函数
* 表达式体
  ```js
  let evens = [2,4,6,8,10];
  let odds = [];
  odds  = evens.map(v => v + 1);
  pairs = evens.map(v => ({ even: v, odd: v + 1 }));
  nums  = evens.map((v, i) => v + i);
  ```
  
* 声明式体
  ``js
    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v);
    })
  ```

* Lexical this
  * 更加直观绑定地对象词法环境，因此可以直接用this, this指向函数体内部context
  
  ```js
  this.nums.forEach((v)=>{
    if(v%5===0){
      this.fives.push(v);
    }
  })
  ```

### 4扩展参数处理
* 默认参数值
  * 简单直观的函数参数默认值。
* 剩余参数
  * Aggregation of remaining arguments into single parameter of variadic functions.
* 扩展操作符
  * Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.

### 5模板字面量
* 字符串插入
* 常见插入
* Raw String Access
### 6扩展字面量
* 二进制和八进制字面量
* Unicode字符串 & 正则表达式字面量
### 7增强正则表达式
* Regular Expression Sticky Matching
### 8增强对象属性
* property shorthand
* Computed Property Names
* Method Porperties
### 9解构赋值
* Array Mathching
* Object Matching, Shorthand Notation
* Object Matching, Deep Matching
* Object And Array Matching, Default Values
* Parameter Context Matching
* Fail-Soft Destructing
### 10模块
* 导入/导出值
* 默认导入导出/通配符
### 11类
* 类定义
  ```js
  class Shape{
      constructor(id, x, y){
          this.id = id;
          this.move(x, y);
      }
      move(x, y){
          this.x = x;
          this.y = y;
      }
  }

  let shape = new Shape(1,123,123324)
  console.log(shape);
  ```
* 类继承
  ```js
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
  }
  // Rectangle class inherit from Shape class
  class Rectangle extends Shape{
      constructor(id,x,y,width,height){
          super(id, x, y);
          this.width = width;
          this.height = height;
      }
  }
  // Circle class inheriting from Shape class also
  class Circle extends Shape{
      constructor(id,x,y,radius){
          super(id, x, y);
          this.radius = radius;
      }
  }
  //generate 3 instances from ShapeClass, RectangleClass, CircleClass respectively
  let shape = new Shape(1,123,123324)
  let rectangle = new Rectangle(2,123,1233,1000,2000);
  let circle = new Circle(3,800,600,16.5);
  console.log(shape);
  console.log(rectangle);
  console.log(circle);
  //iterate the attributes in the circle instance created above.
  //*NOTICE*/ for...of(new in ES6) cannot iterate attrs in a Object intance which is not iterable.
  for(i of circle){
      console.log(circle[i]);
  }
  // for...of can loop the attrs in a iterable Object(e.g. an array)
  var iterableArray = ['wang', 'de', 'jun'];
  for(x of iterableArray){
      console.log(x);
  }
  ```
* 类继承，From Expressions
```js
var aggregation = (baseClass, ...mixins)=>{
  let base = class _Combined extends baseClass{
    constructor(...args){
      super(...args);
      mixins.forEach((mixin)=>{
        mixin.prototype.initializer.call(this);
      })
    }
  }
  let copyProps = (target, source)=>{
    Object.getOwnPropertyNames(source)
          .concat(Object.getOwnPropertySymbols(source))
          .forEach((prop)=>{
            if(prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|apply|toString|length)$/)){
              return;
            }
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
          })
  }
  mixins.forEach((mixin)=>{
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  })
  return base;
}
```
* 基类
  * 直观地使用基类构造函数和方法
  ```js
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
  // BorderCircle class inheriting from Circle 'subclass'
  class BorderCircle extends Circle{
      constructor(id, x, y, radius, borderWidth){
          super(id, x, y, radius);
          this.borderWidth = borderWidth;
      }
      toString(){
          return "BorderCircle > " + super.toString();
      }
  }

  let bordercircle = new BorderCircle(3,800,600,16.5, 2)
  console.log(bordercircle.toString())//BorderCircle > Circle > Shape(3)能显式的看到继承顺序
  ```
* 静态成员
  * 对静态类成员(方法)的简单支持
  ```js
  class Rectangle extends Shape{
    ...
    static defaultRectangle(){
      return new Rectangle("default", 0, 0, 100, 100);
    }
  }

  class Circle extends Shape{
    ...
    static defaultCircle(){
      return new Circle("default", 0, 0, 100);
  }
  ```
* Getter/Setter
  * Getter/Setter 也直接在类内部
  ```js
  class Rectangle{
    constructor(width, height){
      this._width = width;
      this._height = height;
    }
    set width(width){
      this._width = width;
    }
    get width(){
      return this._width;
    }
    set height(height){
      this._height = height;
    }
    get height(){
      return this._height;
    }
    get area(){
      return this._width * this._height;
    }
  }
  let r = new Rectangle(50, 20);
  r.area ===1000

  ```
### 12标志类型(Symbol Type)
* 
### 13迭代器
### 14生成器
### 15图/集 弱图/集
### 16类型数组
### 17新型内置数组
### 18Promises
### 19元编程
### 20国际化和本地化

