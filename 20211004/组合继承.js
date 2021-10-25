/*兼顾原型链继承和构造函数继承的优点*/
//优化空间:调用两次Super()，利用寄生组合继承可以只调用一次

function Super(name,age){
    this.name = name;
    this.age = age;
}
Super.prototype.getName = function(){
    return this.name
}
function Sub(name,age){
    Super.call(this,name,age);
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

let stu1 = new Sub('ybj',18);
console.log(stu1.__proto__.constructor);