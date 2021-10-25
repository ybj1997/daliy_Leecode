// let add = (function () {
//     let sum = 0;
//     return function () {
//         for (let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         }
//         return sum;//向外暴露的数据并且返回给上一级函数作用域，更新num的值
//     }
// })();//子调用可以直接暴露闭包，并且可以直接调用
// add(100);
// add(200);
// console.log(add())

function curry(fn) {
    let judge = (...args) => {
        if (args.length == fn.length) return fn(...args)//传入参数的个数，等于fn的参数个数就最终返回fn中的计算结果
        return (...arg) => judge(...args, ...arg);//返回函数继续被外部调用，传入参数是外部参数，递归调用是原参数与外部参数拼接传入
    }
    return judge
}

let fn = (a, b, c, d,e) => {
    let sum = a + b + c + d+e;
    console.log(sum);
    console.log(a, b, c, d);
}
// // 测试用例
// const foo = curry(fn);
// foo(1)//(2)(3)(4);    // 1 2 3 4
// const f = foo(1)(2)(3);
// f(5); //1 2 3 5

let add = curry(fn);
console.log(add(1, 2, 3)(4)(5))