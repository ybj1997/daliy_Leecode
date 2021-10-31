let arr = [1,3,345,2,1,4,3,2342,3,3,25,];
/*
基于forEach实现filter:
    1.返回一个新数组
*/

Array.prototype.filterSelf = (cb, thisArg) =>{
    if (this == null) {
        throw new Error("this is null or not defined");
    }
    if (typeof cb !== 'function') {
        throw new Error(cb + 'is not a function')
    }
    let O = Object(this);//this就是调用的数组
    let length = O.length >>> 0;
    let k = 0;let res = [];
    while(k < length) {
        if(k in O){
            if(cb.call(thisArg,O[k],k,O)){
                res.push(O[k]);
            }
        }
        k++;
    }
    return res;
}

let newArr = arr.filterSelf(item => item>10);
console.log(newArr);