/*兼顾原型链继承和构造函数继承的优点*/
//优化空间:调用两次Super()，利用寄生组合继承可以只调用一次
//重写了子级原型对象为父级实例对象，如果子类实例对象上面绑定了方法就会丢失

function Super(name,age){
    this.name = name;
    this.age = age;
    this.colors = ['red','black'];
}
Super.prototype.getName = function(){
    return this.name
}
function Sub(name,age){
    Super.call(this,name,age);
}
Sub.prototype.subFn = ()=>{
    console.log('子原型对象上的方法');
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

// let stu1 = new Sub('ybj',18);
// console.log(stu1.__proto__.constructor);

let x = new Sub('张三',18);
let x2 = new Sub('李四',20);
console.log(x.__proto__.__proto__);

console.log(x.__proto__.__proto__.getName === x2.getName);//通过原型链继承的方法,通过原型链查找
console.log(x.__proto__ === x2.__proto__);