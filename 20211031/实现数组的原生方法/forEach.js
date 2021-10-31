/*
forEach:
        1.不改变原数组;
        2.返回值为undefined;
        3.return 无效;
        4.thisValue的this指向哪里，函数中的this就指向哪里;如果不设置thisValue就默认指向Window
                var obj = {
                    name: "小明",
                     say: function () {
                        console.log(this.name);
                        },
                    think: function () {
                        var arr = [1, 2, 3, 4];
                        arr.forEach(function (item) {
                             console.log(this);//window
                        })
                        console.log('---------')
                        arr.forEach(function (item) {
                            console.log(this);//obj
                        }, this)
                    }
                }
                obj.say();
                obj.think();
*/

Array.prototype.forEachSelf = function (cb, thisArg) {
    if (this == null) {
        throw new Error("this is null or not defined");
    }
    if (typeof cb !== 'function') {
        throw new Error(cb + 'is not a function')
    }
    let O = Object(this);
    let length = O.length >>> 0;//将O的长度转化为32位无符号整数
    let L = 0;
    while (L < length) {
        if(key in O){
            cb.call(thisArg,O[key],key,O);
        }
        L++;
    }
}
let a = [];
a.forEachSelf();