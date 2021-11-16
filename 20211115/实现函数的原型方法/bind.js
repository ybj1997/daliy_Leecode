/*
    思路:fn.bind(obj,item1...item)
    1.返回新函数的功能跟call方法类似
    2.bind方法中可以传参、新函数中也可以传参，传入形参，都是调用bind函数的实参使用
    3.返回新函数可以作为构造函数,构造函数的原型对象继承调用bind函数的原型对象
    4.新函数可能有返回值
*/
Function.prototype.bindSelf = function (context) {
    const _this = this;
    let selfArg = Array.prototype.slice.call(arguments,1);//获取bind参数
            
    // let Temp = function () {};

    let newBind = function () {
        let rArg = Array.prototype.slice.call(arguments);//获取返回新函数参数
        let finalArg = selfArg.concat(rArg);
        
        if (this instanceof newBind) {
            //返回新函数作为构造函数使用时，this指向实例对象
            _this.apply(this, finalArg);
        } else {
            //返回新函数直接调用时，this指向window
            _this.apply(context, finalArg);
        }
    }
    //让新函数的原型对象指向bfn的原型对象
    // Temp.prototype = _this.prototype;
    newBind.prototype = Object.create(_this.prototype);
    return newBind;
}
/**************************************************************/
let a = { name: 'ybj', age: 18 };

function fn(x, y) {
    console.log(this);
    return this.age + x + y
}
fn.prototype.log = 'bind调用函数原型对象'
/**************************************************************/

// fn.bindSelf(a, 1)(2)
let Fn = fn.bindSelf(a,1,2);
let obj = new Fn();
console.log(obj.log);