## ES6新特性纵览及与ES5比较(中文版)
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
  ```js
  function f(x,y=7,z=42){
    return x+y+z;
  }
  f(1) === 50;
  ```
  * 用来聚合【变参函数】中的剩余参数
  ```js
  function f (x, y, ...a) {
    console.log("遍历变参函数中的参数")
    for(let i=0; i<a.length; i++){
      console.log(`a${i} : ${ a[i] }`)
    }
    return (x + y) * a.length;
  }
  f(1, 2, "hello", true, 7) === 9
  ```
  * 扩展操作符
    * 扩展为单个字面元素组成的可迭代集(比如数组或者字符串)或者单个函数参数(Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.)
  ```js
  var params = ["Hello", true, 7]
  var other = [1, 2, ...params]

  function f(x,y,...a){
    return (x+y)*a.length;
  }
  f(1,2,...params) === 9
  var str = "foo"
  var chars = [...str]
  ```

### 5,模板字面量
* 字符串插入
  * 向单行或多行字符串插入字符串(可以直接向多行插入字符串，与python类似)
  ```js
  var customer = { name: "Foo" }
  var card = { amount: 7, product: "Bar", unitprice: 42 }
  var message = `Hello ${customer.name},
  want to buy ${card.amount} ${card.product} for
  a total of ${card.amount * card.unitprice} bucks?`
  console.log(message);
  ```
* 常见插入
  向任意方法插入字符串
  ```js
  get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
  ```
* Raw String Access
  ```js
  function quux (strings, ...values) {
      strings[0] === "foo\n"
      strings[1] === "bar"
      strings.raw[0] === "foo\\n"
      strings.raw[1] === "bar"
      values[0] === 42
  }
  quux `foo\n${ 42 }bar`

  console.log(String.raw `foo\n${ 42 }bar` )
  ```
### 6,扩展字面量
* 二进制和八进制字面量
  ```js
  console.log(0b111110111 === 503);
  console.log(0o767 === 503);
  ```
* Unicode字符串 & 正则表达式字面量
  ```js
  "𠮷".length === 2
  "𠮷".match(/./u)[0].length === 2
  console.log("𠮷" === "\uD842\uDFB7");
  console.log("𠮷" === "\u{20BB7}");
  "𠮷".codePointAt(0) == 0x20BB7
  for (let codepoint of "𠮷"){
    console.log(codepoint)
  }
  ```
### 7,增强正则表达式
* Regular Expression Sticky Matching(understand)
  ```js
  let parser = (input, match)=>{
    for(let pos=0; lastPos = input.length; pos<lastPos;){
      for(let i=0;i<match.length;i++){
        match[i].pattern.lastIndex = pos;
        let found
        if((found=match[i].pattern.exec(input))!==null){
          match[i].action(found)
          pos = match[i].pattern.lastIndex;
          break
        }
      }
    }
  }

  let report = (match)=>{
    console.log(JSON.stringify(match))
  }
  parser(["Foo 1 Bar 7 Baz 42"],[
    { pattern: /^Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^\s*/y,         action: (match) => {}            }
  ])
  ```
### 8,增强对象属性
* property shorthand
  ```js
  let x = 'key1';
  let y = 'key2';
  obj = { x, y }
  console.log(obj);
  ```
* Computed属性名
  ```js
  function quux(){
    return 'function expression value'
  }
  let obj = {
      foo: "bar",
      [ "baz" + quux() ]: 42
  }
  console.log(obj);
  ```
* 方法属性
  ```js
  let obj = {
    foo(a,b){
      return a+b;
      }, 
    bar(x,y){
      return x*y
      },
    //generator function
    *quux(x,y){return x/y}}
  ```

### 9,解构赋值
* Array Mathching
* Intuitive and flexible destructuring of Arrays into individual variables during assignment.
  ```js
  var list = [ 1, 2, 3 ]
  var [ a, , b ] = list
  //交换a,b的值
  [ b, a ] = [ a, b ]
  ```
* Object Matching, Shorthand Notation
  ```js
  //ES6 赋值过程中可以直接从函数expression value 中解构赋值
  function getASTNode(){
    let obj={op:12,lhs:12,rhs:13}; 
    return obj
  }
  var { op, lhs, rhs } = getASTNode()
  console.log(`op:${op} lhs:${lhs} rhs:${rhs}`)
  
  //ES5借助中间临时对象tmp
  var tmp = getASTNode();
  var op = tmp.op;
  var lhs = tmp.lhs;
  var rhs = tmp.rhs;
  console.log(`op:${op} lhs:${lhs} rhs:${rhs}`)
  ```
* Object Matching, Deep Matching
  ```js
  //ES6
  var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
  //ES5
  var tmp = getASTNode();
  var a = tmp.op;
  var b = tmp.lhs.op;
  var c = tmp.rhs;
  ```
* Object And Array Matching, Default Values
  ```js
  var obj = { a: 1 }
  var list = [ 1 ]
  var { a, b = 2 } = obj
  var [ x, y = 2 ] = list
  ```
* Parameter Context Matching
  * 在函数调用过程中，更加直观灵活把数组和对象解构为单独的参数（Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.）
  ```js
  function f ([ name, val ]) {
      console.log(name, val)
  }
  function g ({ name: n, val: v }) {
      console.log(n, v)
  }
  function h ({ name, val }) {
      console.log(name, val)
  }
  f([ "bar", 42 ])
  g({ name: "foo", val:  7 })
  h({ name: "bar", val: 42 })
  ```
* Fail-Soft 解构
  ```js
  var list = [ 7, 42 ]
  var [ a = 1, b = 2, c = 3, d ] = list
  a === 7
  b === 42
  c === 3
  d === undefined
  ```

### 10,模块
* 导入/导出值
  ```js
  //  lib/math.js
  export function sum (x, y) { return x + y };
  export var pi = 3.141593;

  //  someApp.js
  import * as math from "lib/math";
  console.log("2π = " + math.sum(math.pi, math.pi));

  //  otherApp.js
  import { sum, pi } from "lib/math";
  console.log("2π = " + sum(pi, pi));
  ```
* 默认导入导出/通配符
  ```js
  //  lib/mathplusplus.js
  export * from "lib/math";
  export var e = 2.71828182846;
  export default (x) => Math.exp(x);

  //  someApp.js
  import exp, { pi, e } from "lib/mathplusplus";
  console.log("e^{π} = " + exp(pi));
  ```

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
  //Shaple类
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
  console.log(Shape: ${ shape } Rectangle: ${ rectangle } Circle: ${ circle });
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
  * aggregation:聚合(数据库词汇)
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
  * 生成函数,直接使用。
  ```js
    function* range(start, end, step){
      while(start<end){
        yield start;
        start+=step;
      }
    }
    for(let i of range(0,10,2)){
      console.log(i);
    }
  ```
  * 生成器匹配
    * 支持生成函数，生成函数就是控制流可以停止和前进的以生成序列值的函数。
  ```js
  let fibonacci = function* (numbers) {
      let pre = 0, cur = 1
      while (numbers-- > 0) {
          [ pre, cur ] = [ cur, pre + cur ]
          yield cur
      }
  }
  for (let n of fibonacci(1000)){
    console.log(n)
  }
  let numbers = [ ...fibonacci(1000) ]
  let [ n1, n2, n3, ...others ] = fibonacci(1000)
  ```
  * 生成器控制流
  ```js
    //公用异步控制流驱动
    function async(proc,...params){
      var iterator = proc(...params)
      return new Promise((resolve, reject)=>{
        let loop = (value)=>{
          let result;
          try{
            result = iterator.next(value);
          }catch(err){
            reject(err);
          }
          if(result.done)
            resolve(result.value)
          else if(typeof result.value === 'object' && typeof result.value.then ==="function")
            result.value.then((value)=>{
              loop(value)
            },(err)=>{
              reject(err);
            })
          else
            loop(result.value)
        }
        loop();
      })
    }
    //异步构造器(application-specific)
    function makeAsync(text, after){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(text),after)
      })
    }
    //特定异步过程(application-specific)
    async(function* (greeting){
      let foo = yield makeAsync("foo", 300);
      let bar = yield makeAsync("bar", 200);
      let baz = yield makeAsync("baz", 100);
      return `${greeting} ${foo} ${bar} ${baz}`}, "Hello").then((msg)=>{
        console.log("RESULT:", msg)
      })
    })
  ```
  * 生成器方法
    ```js
    class Clz {
        * bar () {
          ...
        }
    }
    let Obj = {
        * foo () {
          ...
        }
    }
    ```
### 15,图/集 弱图/集
  * 【Set】
    * 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。(阮一峰)
  ```js
  let s = new Set()
  s.add("hello").add("goodbye").add("hello")
  s.size === 2
  s.has("hello") === true
  for (let key of s.values()) // insertion order
      console.log(key)
  ```
  * 【weakSet】
    * WeakSet 在 JavaScript 底层作出调整（在非降级兼容的情况下），检查元素的变量引用情况。如果元素的引用已被全部解除，则该元素就会被删除，以节省内存空间。这意味著无法直接加入数字或者字符串。另外 WeakSet 对元素有严格要求，必须是 Object，当然了，你也可以用 new String('...') 等形式处理元素。
  ```js
  let weaks = new WeakSet()
  weaks.add("hello") //=> Error
  weaks.add(3.1415) //=> Error

  let foo = new String("bar")
  let pi = new Number(3.1415)
  weaks.add(foo)
  weaks.add(pi)
  weaks.has(foo) //=> true
  foo = null
  weaks.has(foo) //=> false
  ```
  * 【Map】
    * 从数据结构的角度来说，映射（Map）跟原本的 Object 非常相似，都是 Key/Value 的键值对结构。但是 Object 有一个让人非常不爽的限制：key 必须是字符串或数字。在一般情况下，我们并不会遇上这一限制，但若我们需要建立一个对象映射表时，这一限制显得尤为棘手。

    * 而 Map 则解决了这一问题，可以使用任何对象作为其 key，这可以实现从前不能实现或难以实现的功能，如在项目逻辑层实现数据索引等。
  ```js
  let m = new Map()
  let s = Symbol()
  m.set("hello", 42)
  m.set(s, 34)
  m.get(s) === 34
  m.size === 2
  for (let [ key, val ] of m.entries())
      console.log(key + " = " + val)
  ```
  * 【WeakMap】
    * 键值都是Object,与WeakSet很相似，weakMap不同的是对键值都会检查变量引用，只要key-value有一个引用被解除，那么该键值全部会被删除
  ```js
  let weakm = new WeakMap()
  let keyObject = { id: 1 }
  let valObject = { score: 100 }

  weakm.set(keyObject, valObject)
  weakm.get(keyObject) //=> { score: 100 }
  keyObject = null
  weakm.has(keyObject) //=> false
  ```
### 16,类型数组
  * Typed Array
### 17,新型内置方法
  * 对象赋值
  * 数组元素查找
  * 字符串复制
  * 字符串搜索
  * 数字类型检查
  * 数字安全检查
  * 数字对比
  * 数字Trunction
  * 数字Sign Determination
### 18,Promises

*  使用Promise
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
  * Proxying
  * Reflection
### 20,国际化和本地化
  * Collation
  * Number Formatting
  * Currency Formatting
  * Data/Time Formatting