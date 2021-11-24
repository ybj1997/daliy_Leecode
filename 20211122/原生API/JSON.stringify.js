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
                //数组中的这三种类型为null
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                    result[index] = "null";
                } else {//其他类型转换不变
                    result[index] = JSON.stringify1(item);
                }
            })

            /*数组转字符串*/
            result = "[" + result + "]";

            /*转双引号*/
            return result.replace(/'/g, '"');
        } else {
            //普通对象
            /**
             * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
             * symbol key 忽略
             * undefined、函数、symbol 为属性值，被忽略
             */
            let result = [];
            Object.keys(tar).forEach(function(item){
                    if(typeof item !== 'undefined' || typeof item !== 'function' || typeof item !== 'symbol'){
                        result.push('"' + item + '"' + ":" + JSON.stringify1(tar[item]));
                        console.log(result);
                    }
            })
            
            //将数组转换成字符串
            result = '{'+result+'}';
            console.log(result);

            /*替换成双引号*/
            return result.replace(/'/g,'"');
        }
    }
}

let obj = {
    name: '刘小夕',
    age: 22,
    hobbie: ['coding', 'writing'],
    date: new Date(),
    unq: Symbol(10),
    sayHello: function() {
        console.log("hello")
    },
    more: {
        brother: 'Star',
        age: 20,
        hobbie: [null],
        info: {
            money: undefined,
            job: null,
            others: []
        }
    }
}
console.log(JSON.stringify1(obj) === JSON.stringify1(obj));