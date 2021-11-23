JSON.stringify1 = (tar) => {
    let dataType = typeof tar;

    if (dataType !== 'object') {
        let result = tar;
        if (Number.isNaN(tar) || tar === Infinity) {
            result = "null";
        }
        if (dataType === 'function' || dataType === 'undefined' || dataType === 'symbol') {
            return undefined;
        }
        /*将字符串转换成双引号*/
        if (dataType === 'string') {
            result = '"' + tar + '"';
        }

        return String(result);
    } else if (dataType === 'object') {
        if (tar === null) {
            return "null"
        }
        if (tar.toJSON && typeof tar.toJSON === 'function') {
            return JSON.stringify1(tar.toJSON());
        }
        if (tar instanceof Array) {
            let result = [];

            tar.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                    result[index] = "null";
                } else {
                    result[index] = JSON.stringify1(item);
                }
            })
            console.log(typeof result);

            /*数组转字符串*/
            result = "[" + result + "]";
            
            /*转双引号*/
            return result.replace(/'/g,'"');
        }else{
            //普通对象
            /**
             * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
             * symbol key 忽略
             * undefined、函数、symbol 为属性值，被忽略
             */
        }
    }
}

console.log(JSON.stringify([1, 2, 3, 4]) === JSON.stringify1([1, 2, 3, 4]));