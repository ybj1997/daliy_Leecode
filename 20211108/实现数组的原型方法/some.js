Array.prototype.someSelf = function (fn, thisArg) {
    if(this == null){
        throw new TypeError('this is null or not defined');
    }
    if(typeof fn === 'function'){
        throw new TypeError(`${fn.prototype.constructor.name}is not a function`);
    }
    const O = Object(this);
    const len = O.length >>> 0;
    let k = 0;
    while(k < len){
        if(k in O){
            //调用函数，有一个满足函数就为真
            if(fn.call(thisArg,k[O],k,O)) return true;
        }
        k++;
    }
    return false;
}