Function.prototype.applySelf = function(context,argArr) {
    let thisObj = context || window;
    thisObj.fn = this;

    let result = eval('thisObj.fn(...argArr)');

    delete thisObj.fn;
    return result;
}


let obj = {age:18};

function fn (a,b) {
    console.log(this.age+a+b);
}

fn.applySelf(obj,[19,20])