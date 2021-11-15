Function.prototype.callSelf = function (context) {
    //let变量不能重复声明
    let a = context || window;//保存我们想要指向的this的对象
    a.fn = this;//将调用函数添加到想要指向的this的对象中，然后调用这个函数就可以了

    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }

    let result = eval('a.fn(' + args + ')');

    delete a.fn//用完删除添加函数
    return result;
}

let obj = { age: 18 };

function fn(a, b) {
    console.log(this.age + a + b);
}

fn.callSelf(obj, 19, 20)