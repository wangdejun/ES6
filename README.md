ES6新特性纵览及与ES5比较(中文版)
<a href='http://es6-features.org/'>来自es6-features.org<a>

### 1,常量
* 常量
  * 支持常量(不可改变量)，换句话说，变量一旦被定义，则不能被重新赋值。注意，只是变量本身不能够被改变，而常量指向的对象可以改变的。
    ```js
    const PI = 3.141593
    PI > 3.0
    ```

### 2,作用域
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
### 3,箭头函数
* 表达式体
  ```js
  let evens = [2,4,6,8,10];
  let odds = [];
  odds  = evens.map(v => v + 1);
  pairs = evens.map(v => ({ even: v, odd: v + 1 }));
  nums  = evens.map((v, i) => v + i);
  ```
  
* 声明式体
  ```js
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

### 4,扩展参数处理
* 默认参数值
  * 简单直观的函数参数默认值。
* 剩余参数
  * Aggregation of remaining arguments into single parameter of variadic functions.
* 扩展操作符
  * Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.

### 5,模板字面量
* 字符串插入
* 常见插入
* Raw String Access
### 6,扩展字面量
* 二进制和八进制字面量
* Unicode字符串 & 正则表达式字面量
### 7,增强正则表达式
* Regular Expression Sticky Matching
### 8,增强对象属性
* property shorthand
* Computed Property Names
* Method Porperties
### 9,解构赋值
* Array Mathching
* Object Matching, Shorthand Notation
* Object Matching, Deep Matching
* Object And Array Matching, Default Values
* Parameter Context Matching
* Fail-Soft Destructing
### 10,模块
* 导入/导出值
* 默认导入导出/通配符
### 11,类
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
### 12,标志类型(Symbol Type)
* 用来作为对象属性的不可重和不可变数据类型，Symbol类型有可选的描述选项，但是只用来debug用
  ```js
  Symbol("foo") !== Symbol("foo");
  const foo = Symbol();
  const bar = Symbol();
  typeof foo === "symbol";
  typeof bar === "symbol";
  let obj = {};
  obj[foo] = "foo";
  obj[bar] = "bar";
  JSON.stringify(obj); // {}
  Object.keys(obj); // []
  Object.getOwnPropertyNames(obj); // []
  Object.getOwnPropertySymbols(obj); // [ foo, bar ]
  ```
* 全局Symbol
  ```js
  Symbol.for("app.foo") === Symbol.for("app.foo")
  const foo = Symbol.for("app.foo");
  const bar = Symbol.for("app.bar");
  Symbol.keyFor(foo) === "app.foo";
  Symbol.keyFor(bar) === "app.bar";
  typeof foo === "symbol";
  typeof bar === "symbol";
  let obj = {};
  obj[foo] = "foo";
  obj[bar] = "bar";
  JSON.stringify(obj); // {}
  Object.keys(obj); // []
  Object.getOwnPropertyNames(obj); // []
  Object.getOwnPropertySymbols(obj); // [ foo, bar ]
  ```
### 13,迭代器
* 第一，允许对象定制他们自己的遍历行为。
* 第二，支持迭代协议产生一个值序列(有穷或无穷)。
* 第三，为可遍历对象提供了一种便捷的遍历操作。
  ```js
  //ES6
  let fibonacci = {
      [Symbol.iterator]() {
          let pre = 0, cur = 1;
          return {
            next () {
                [ pre, cur ] = [ cur, pre + cur ];
                return { done: false, value: cur };
            }
          };
      }
  }
  for (let n of fibonacci) {
      if (n > 1000)
          break;
      console.log(n);
  }

  //ES5
  var fibonacci = {
      next: (function () {
          var pre = 0, cur = 1;
          return function () {
              tmp = pre;
              pre = cur;
              cur += tmp;
              return cur;
          };
      })()
  };
  var n;
  for (;;) {
      n = fibonacci.next();
      if (n > 1000)
          break;
      console.log(n);
  }
  ```
### 14,生成器(Generator)
  * 支持生成器，用于生成序列，控制流可以暂停，可以继续，以便产生一个值序列
  ```js
  let fibonacci = {
    *[Symbol.iterator](){
      let pre = 0, cur = 1;
      for(;;){
        [pre,cur] = [cur, pre+cur];
        yeild cur;
      }
    }
  }
  for(let n of fibonacci){
    if(n>1000)
      break;
    console.log(n);
  }
  ```
  * Generator Function, Direct Use
  * Generator Matching
  * Generator Control-Flow
  * Generator Methods

### 15,图/集 弱图/集
  * Set Data-Structure
  * Map Data-Structure
  * Weak-Link DataStructure
### 16,类型数组

### 17,新型内置数组
### 18,Promises
  * 使用Promise
    ```js
    function msgAfterTimeout (msg, who, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
        });
    }
    msgAfterTimeout("", "Foo", 100).then((msg) =>
        msgAfterTimeout(msg, "Bar", 200)
    ).then((msg) => {
        console.log(`done after 300ms:${msg}`);
    });
    ```

  * 合并promise
    ```js
    function fetchAsync (url, timeout, onData, onError) {
        …
    }
    let fetchPromised = (url, timeout) => {
        return new Promise((resolve, reject) => {
            fetchAsync(url, timeout, resolve, reject);
        });
    }
    Promise.all([
        fetchPromised("http://backend/foo.txt", 500),
        fetchPromised("http://backend/bar.txt", 500),
        fetchPromised("http://backend/baz.txt", 500)
    ]).then((data) => {
        let [ foo, bar, baz ] = data;
        console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
    }, (err) => {
        console.log(`error: ${err}`);
    });
    ```
### 19,元编程
### 20,国际化和本地化

