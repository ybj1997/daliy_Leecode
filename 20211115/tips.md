一、bind方法创建的新函数，可以作为构造函数实现实例对象；

二、 **当使用 new 关键字调用函数时，函数中的 this 一定是 JS 创建的实例对象。** 

```javascript
let a = { name: 'ybj', age: 18 };
function fn(x, y) {
        console.log(this.name);//this指向fn.prototype
        console.log(this.age + x + y);
}
fn.prototype.name='fn是构造'
let obj = fn.bind(a,1,2);
let b = new obj();
console.log(b.__proto__);//fn.prototype
```

二、箭头函数不能作为构造函数使用

三、闭包的this指向如果不在外层函数保存，一般指向window

四、

```javascript
var altwrite = document.write;
altwrite("hello");//报错，因为altwrite方法是在window上进行调用的，而window上是没有该方法的

altwrite.bind(document)("hello")
```

