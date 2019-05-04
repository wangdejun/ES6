# 1.盒模型
* 当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。
* 每个盒子由四个部分（或称区域）组成，其效用由它们各自的边界（Edge）所定义
* 每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。
* 每个盒子有4个区域
  * content area
  * padding area
  * border area
  * margin area

# BFC 
* **块格式化上下文**（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
* https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

# 6. 错误处理try catch
* https://www.jianshu.com/p/2037e3b53d5f
* 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法和catch方法。
    ```js
    // bad
    promise
    .then(function(data) {
        // success
    }, function(err) {
        // error
    });

    // good
    promise
    .then(function(data) { //cb
        // success
    })
    .catch(function(err) {
        // error
    });
    ```
# 7. promise await 异步编程
# 8. 迭代器 Iterator
* **Iterator**
    * 一个迭代器对象 ，知道如何每次访问集合中的一项， 并跟踪该序列中的当前位置。在  JavaScript 中 迭代器是一个对象，它提供了一个next() 方法，用来返回序列中的下一项。这个方法返回包含两个属性：done和 value。
# 9. Symbol 新增的数据类型

* symbol 是一种基本数据类型

* Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

// TODO
* symbol 与 Mobx

# 10. getter,setter 劫持，手写一个vue.js, observalbe object如何实现

# 11. 如何实现一个双向数据绑定到input框的东西

# 12. 实现一个简单promise Implementation


# 13. 迭代器/生成器 Iterator/Generator
* **Iterator**
    * 一个迭代器对象 ，知道如何每次访问集合中的一项， 并跟踪该序列中的当前位置。在  JavaScript 中 迭代器是一个对象，它提供了一个next() 方法，用来返回序列中的下一项。这个方法返回包含两个属性：done和 value。

    * 迭代器对象一旦被创建，就可以反复调用next()
        ```js
        function makeIterator(array){
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < array.length ?
                            {value: array[nextIndex++], done: false} :
                            {done: true};
                    }
                };
            }
        ```
    * 一旦初始化，next()方法就可以依次访问对象中的键值：
        ```js
        var it = makeIterator(['yo', 'ya']);
        console.log(it.next().value); // 'yo'
        console.log(it.next().value); // 'ya'
        console.log(it.next().done);  // true
        ```
* 生成器
    * 虽然自定义的迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。Generators提供了一个强大的选择：它允许你定义一个包含自有迭代算法的函数， 同时它可以自动维护自己的状态。

    * GeneratorFunction 是一个可以作为迭代器工厂的特殊函数。当它被执行时会返回一个新的Generator对象。 如果使用function*语法，则函数将变为GeneratorFunction。
        ```js
        function* idMaker() {
        var index = 0;
        while(true)
            yield index++;
        }

        var gen = idMaker();

        console.log(gen.next().value); // 0
        console.log(gen.next().value); // 1
        console.log(gen.next().value); // 2
        ```

    * 可迭代对象
    * 一个定义了迭代行为的对象，比如在for...of中循环了哪些值。一些内置类型，如Array或Map具有默认的迭代行为，而其他类型（如Object）没有。

    * 为了实现可迭代，一个对象必须实现 @@iterator 方法，这意味着这个对象（或其原型链中的一个对象）必须具有带 Symbol.iterator 键的属性：

    * 自定义的可迭代对象
    我们可以像这样实现自己的迭代：
        ```js
        var myIterable = {};
        myIterable[Symbol.iterator] = function* () {
            yield 1;
            yield 2;
            yield 3;
        };

        for (let value of myIterable) { 
            console.log(value); 
        }
        // 1
        // 2
        // 3

        //or

        console.log([...myIterable]); // [1, 2, 3]
        ```

# 14. http 协议
* 代码和含义
  * 100 info
  * 200 success
  * 300 重定向系列
  * 400 客户端错误
  * 500 服务器内部错误

* 如何优化网站性能？Yahoo 42条军规整理
  * **内容部分**
    * 1.尽量减少HTTP请求数
    * 2.减少DNS查找
    * 3.避免重定向
    * 4.让Ajax内容可缓存
      * 强制缓存，协商缓存
      * Cache-Control
        * Expires
        * 配置Etags
    * 5.延迟加载组件
    * 6.预先加载组价
    * 7.减少DOM数量/ 700个
    * 8.跨域分离
      * 最大化并行下载，2-4个域
    * 9.减少使用Iframe
    * 10.杜绝使用404 是一个无意义的部分。
  * **css部分**
    * 11.避免使用CSS表达式
    * 12.选择<link>而非@import
    * 13.避免使用滤镜
    * 14.把样式表放在顶部，让页面逐步渲染
  * **js部分**
    * 15.去除重复脚本
    * 16.减少DOM访问
    * 17.事件委托，太多频繁执行的事件处理器被添加到了DOM树的不同层次上。
    * 18.把脚本<script></script>放在底部
  * **javascript, css** 作为静态文件
    * 19.javascript 和 CSS static文件放在外面，静态文件可以被缓存
    * 20.压缩和混淆工具
  * **图片**
    * 21.优化图片，GIF->PNG，文件大小可能会变化。
    * 22.优化CSS sprite
      * 横向排列一般比纵向排列最终文件小
      * 256色以下PNG8格式
      * 对移动端友好，图片间隙最好小一些，User Agent把图片解析成像素映射消耗的内存对不同尺寸有不同的消耗
    * 23.不要用HTML缩放图片
    * 24.用小的可缓存的favicon.ico（P.S. 收藏夹图标）
      * 足够小，1KB以下
      * 设置合适的HTTP头
  * **cookie**
    * 25.给Cookie减肥
    * 26.把组件放在不含cookie的域下
  * **移动端**
    * 27.25K
    * 28.把组件打包到一个符合文档里
  * **服务器**
    * 29.Gzip组件
      * Accept-Encoding: gzip, deflate
      * Content-Encoding: gzip
    * 30.避免图片src属性为空
      * <img src="">
    * 31.配置ETags
    * 32.对Ajax用GET请求
    * 33.尽早清空缓冲区
    * 33.使用CDN
    * 34.添加Expires或者Cache-Control头
  
* 缓存策略，协商缓存/强制缓存
* 在Html中js执行的顺序

# 15. mobx的实现原理
# 16. redux的实现原理
# 17. TypeScript局部实现