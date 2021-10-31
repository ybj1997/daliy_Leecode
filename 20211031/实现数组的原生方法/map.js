let arr = [1,4,2,4,23,2,34,2,34]
// arr.map(item => console.log(this))

/*
基于原生forEach:实现map
            1.返回一个新数组
*/

Array.prototype.mapSelf = function (cb,thisArg) {
    if(this == null){
        throw new Error('this is null or not defined');
    }
    if (typeof cb !== 'function') {
        throw new Error(cd + 'is not a function');
    }
    let O = Object(this);
    let length = O.length >>> 0;
    let k = 0; let res = [];
    while (k < length) { 
        if(k in O){
            res[k] = cb.call(thisArg,O[k],k,O);
        }
        k++;
    }
    return res;
}