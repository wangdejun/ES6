ES6新特性纵览及与ES5比较
<a href='http://es6-features.org/'>来自es6-features.org<a>

### 1常量
* 常量
  * Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).
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
### 3箭头函数
* 表达式体
  * More expressive closure syntax.
* 声明式体
  * More expressive closure syntax.
* 词法This
  * More intuitive handling of current object context.

### 4扩展参数处理
* 默认参数值
  * Simple and intuitive default values for function parameters.
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
* 类继承
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

