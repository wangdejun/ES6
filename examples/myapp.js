//声明引用的模块
module point from "/point.js";
//这里可以看出，尽管声明了引用的模块，还是可以通过指定需要的部分进行导入
import Point from "point";
 
var origin = new Point(0, 0);
console.log(origin);