/*
    思路:fn.bind(obj,item1...item)
    1.返回新函数的功能跟call方法类似
    2.bind方法中可以传参、新函数中也可以传参
    3.返回新函数可以作为构造函数
    4.新函数可能有返回值
*/
Function.prototype.bindSelf = function (context,...args) {
    let thisArg = context || window;

    return function (){
        thisArg.fn = this;
        let result = eval(`thisArg.fn(...args)`);
        delete thisArg.fn;
        return result;
    }
}

let a={name:'ybj',age:18};

function fn(x,y){
    console.log(this.name);
    console.log(this.age+x+y);
}

let p = new fn.bind(a,1,2);