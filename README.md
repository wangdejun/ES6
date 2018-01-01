ES6新特性纵览及与ES5比较
<a href='http://es6-features.org/'>来自es6-features.org<a>

### 1常量
* 常量
  * 支持常量(不可改变量)，换句话说，变量一旦被定义，则不能被重新赋值。注意，只是变量本身不能够被改变，而常量指向的对象可以改变的。
    ```
    const PI = 3.141593
    PI > 3.0
    ```

### 2作用域
* 块作用域变量
  * 没有变量上举的块级作用域变量(或常量). 
    ```
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
    ```
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
  * More expressive closure syntax.
* 声明式体
  * More expressive closure syntax.
* 绑定词法环境
  * 更加直观绑定地对象词法环境，因此可以直接用this, this指向函数体内部context

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
  ```
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
  ```
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
* 累继承，From Expressions
* 基类
* 静态成员
* Getter/Setter
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

