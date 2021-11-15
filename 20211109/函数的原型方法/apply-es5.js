Function.prototype.applySelf = function (context,arr) {
    let thisObj = context || window;
    thisObj.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete thisObj.fn;

    //apply方法的返回值
    return result;
}
let obj = { age: 18 };

function fn(a, b) {
    console.log(this.age + a + b);
}

fn.applySelf(obj, [19, 20])