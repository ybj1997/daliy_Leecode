// Function.prototype.bindSelf = function (context,...args) {
//     let thisArg = context;
//     console.log(...args);
// }
Function.prototype.bindSelf = function (context,...args) {
    let thisArg = context || window;

    return ()=>{//用箭头函数，保证this的指向，同时返回函数具有跟call一样的方法
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

console.log(fn.bindSelf(a,1,2)())