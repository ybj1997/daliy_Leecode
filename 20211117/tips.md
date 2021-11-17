#### 一、new关键字

构造函数没有返回值、返回值为 ''值类型'' 或者返回值为null时，返回实例对象

构造函数有返回值，返回值为 ''引用类型'' 时，返回值为该引用类型

------

#### 二、

```javascript
function Super(){};
function Sub(){};
Sub.prototype = Object.create(Super.prototype)//创建一个新的对象并继承Super的原型对象
/*       等价于        */
function Temp(){}
Temp.prototype = Super.prototype
Sub.prototype = new Temp()

```

