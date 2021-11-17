/*
    思路：
        1.创建一个新的对象，并且这个对象继承构造函数的原型对象
        2.执行构造函数，构造函数中的this指向新创建的对象
        3.构造函数存在返回值，返回值为值类型时，返回新对象；返回值为引用类型时，返回引用对象
*/

function objectFactory(fn,...args) {
    let obj = Object.create(fn.prototype);//1.创建一个新对象并且继承了构造函数的原型对象
    let res = fn.call(obj,...args);//2.执行构造函数，并且改变构造函数中的this指向，指向新对象
    return  typeof res === 'object' || typeof res ==='function'? res||obj : obj;//3.正常情况下，返回新对象;当构造函数返回值为引用类型时，返回引用类型
};

function fn(name,age){
    this.name = name;
    this.age = age;
    return null
}
fn.prototype.getName = function(){
    console.log(this.name);
}

let p = objectFactory(fn,'ybj',18)
let p1 = new fn('ybj2',18)
console.log(p,p1);
