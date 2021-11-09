Function.prototype.callSelf = function (context,...args) {
    //不能使用let，块级作用域，let变量不能重复声明
    let a = context || Window;
    a.fn = this;//将调用函数添加到context对象中

    //eval计算字符串
    let result = eval('a.fn(...args)');

    delete a.fn//用完删除添加函数
    return result;
}

let obj = {age:18};

function fn (a,b) {
    console.log(this.age+a+b);
}

fn.callSelf(obj,19,20)