/*
    Object.create(proto,propertiesObj)含义：
        1.创建一个原型对象为proto(可以传入原型对象，可以传入函数)的新对象
        2.修改或定义propertiesObj的属性到新对象上
*/

Object.createSelf = function(proto,propertiesObj = undefined) {
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError('Object prototype may only be an Object or null.')
    }
    if(propertiesObj === null){
        throw new TypeError('Cannot convert undefined or null to object')
    }

    /*将目标原型对象赋值给新对象*/
    function Temp(){};
    Temp.prototype = proto;
    let obj = new Temp();

    if(propertiesObj !== undefined){
        /*重写新对象的属性*/
        Object.defineProperties(obj,propertiesObj);
    }
    if(proto === null){
        /*当proto传入null时，创建新对象的原型对象为null*/
        obj.__proto__ = null;
    }
    return obj;
}

function fn(){};
fn.prototype.log = '111';

let obj = Object.createSelf(fn.prototype);
console.log(obj.__proto__);