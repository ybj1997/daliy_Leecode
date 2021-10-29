//寄生组合继承仍然存在缺点：重写了子级原型对象，如果对象上面有方法会丢失;

function Super(name, age) {
    this.name = name;
    this.age = age;
}
Super.prototype.getName = function () {
    return this.name
}
function Sub(name, age) {
    Super.call(this, name, age);
}

/*
Object.create(params)：
参数：原型对象
返回值：实例对象
*/
Sub.prototype = Object.create(Super.prototype);
/* 
    function newPrototype(objprototype){
        function Fn(){};
        Fn.prototype = objprototype;
        return new Fn();
    }
    Sub.prototype = newPrototype(Super.prototype);
*/
Sub.prototype.constructor = Sub;