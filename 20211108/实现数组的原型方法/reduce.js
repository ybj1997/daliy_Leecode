Array.prototype.reduce2 = function(callback, initialValue) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    let k = 0,acc;//acc默认初值
    //1.判断是否赋初始值，判断依据arguments的长度
    if(arguments.length >1) {
        acc = initialValue;
    }else{
        //2.确认没有默认初值后，使用数组的第一个值
        //前提先判断数组是否为空
        if(len === 0) {
            throw new TypeError('Empty!')
        }
        //3.不为空时，找到数组的第一个值
        while(k<len && !(k in O)){
            k++;
        }
        //4.等价于acc = O[k++];
        acc = O[k];
        k++;
    }
    while(k<len){
        if(k in O){
            //5.调用函数更新acc
            acc = callback.call(undefined,acc,O[k],k,O);
        }
        k++;
    }
    return acc;
}

let arr=[1,2];
console.log(arr.reduce2((pre,crt,crtIndex,crtArr)=>{
    return pre+crt
},100))