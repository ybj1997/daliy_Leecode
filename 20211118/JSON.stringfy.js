/*
    JSON.stringify(target[,replace[,space]])含义:
        1.将target转化为JSON格式字符串
        2.replace为函数时，则每个元素转化时都要经过函数处理;
        replace为数组时， 则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中
        3.space缩进用的空白字符串

    功能描述:
        1.undefined、任意的函数以及 symbol 值在序列化过程中:
            ***以数组的形式存在时，转换成"null";
            ***非数组形式时，将会被忽略;
            ***函数、undefined、symbol被单独转换时，会返回 undefined;
        2.基本数据类型:
            ***boolean ===》"true"/"false"
            ***number转换为字符串类型数字;
            ***null,NaN,Infinity ===》"null"
            ***string不变
            ***undifned ===》undifined(类型也为undefined)
            ***symbol ===》undefined
        3.对象类型(非函数):
            ***Date对象 ===》返回Date的toJSON字符串值
            ***RegExp对象 ===》 "{}"
            ***其他类型的对象(Map,Set,WeakMap,WeakSet)仅序列化可枚举(enumerable：true)
            ***普通对象：如果有toJSON()则序列化toJSON()方法的返回值
                        如果属性值中有undefined、函数、symbol则忽略;对应第一条第二点
                        所有以symbol为属性键的属性都会被完全忽略
        4.异常:循环引用和转换bitInt类型
*/
// function JSON_Stringfy(data) {
//     let dataType = typeof data;
//     /*分为：是对象和不是对象  两种情况*/

//     /*
//         dataType !== 'object':
//             值类型:number(NaN,Infinity),string,boolean,undefined,symbol或者函数
//     */
//     if (dataType !== 'object') {
//         let result = data;
//         /*number类型的特殊情况*/
//         if (Number.isNaN(result) || result === Infinity) {
//             result = "null";
//         }
//         /*函数、undefined、symbol被单独转换时，会返回 undefined*/
//         if (dataType === 'function' || dataType === 'symbol' || dataType === 'undefined') {
//             return undefined;
//         }
//         /*剩余正常情况*/
//         return String(result);
//     }
//     /*
//         dataType === 'object':
//             data可能是对象（可能含toJSON()），数组，Date，RegExp，null
//     */
//     else if (dataType === 'object') {
//         if (data === null){
//             return "null"
//         }else if(data.toJSON && typeof data.toJSON === 'function') {
//             return JSON_Stringfy(data.toJSON())
//         }else if(data instanceof Array){
//             //判断里面的元素类型，如果为undefined、symbol或者函数，转换为"null"
//             let result = [];
//             data.forEach((item,index) => {
//                 if(typeof item === 'undefined'||typeof item === 'symbol'||typeof item === 'functiong'){
//                     result[index] = "null";//值替换为null
//                 }else{
//                     result[index] = JSON_Stringfy(item);
//                 }
//             });
//             result = '['+result+']';//'[item,item....]'
//             return result.replace(/'/g,'"');//将单引号替换为双引号
//         }
//     }
// }
const jsonstringify = (data) => {
    // 确认一个对象是否存在循环引用
    const isCyclic = (obj) => {
        // 使用Set数据类型来存储已经检测过的对象
        let stackSet = new Set()
        let detected = false

        const detect = (obj) => {
            // 不是对象类型的话，可以直接跳过
            if (obj && typeof obj != 'object') {
                return
            }
            // 当要检查的对象已经存在于stackSet中时，表示存在循环引用
            if (stackSet.has(obj)) {
                return detected = true
            }
            // 将当前obj存如stackSet
            stackSet.add(obj)

            for (let key in obj) {
                // 对obj下的属性进行挨个检测
                if (obj.hasOwnProperty(key)) {
                    detect(obj[key])
                }
            }
            // 平级检测完成之后，将当前对象删除，防止误判
            /*
              例如：对象的属性指向同一引用，如果不删除的话，会被认为是循环引用
              let tempObj = {
                name: '前端胖头鱼'
              }
              let obj4 = {
                obj1: tempObj,
                obj2: tempObj
              }
            */
            stackSet.delete(obj)
        }

        detect(obj)

        return detected
    }

    // 特性七:
    // 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
    if (isCyclic(data)) {
        throw new TypeError('Converting circular structure to JSON')
    }

    // 特性九:
    // 当尝试去转换 BigInt 类型的值会抛出错误
    if (typeof data === 'bigint') {
        throw new TypeError('Do not know how to serialize a BigInt')
    }

    const type = typeof data
    const commonKeys1 = ['undefined', 'function', 'symbol']
    const getType = (s) => {
        return Object.prototype.toString.call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase()
    }

    // 非对象
    if (type !== 'object' || data === null) {
        let result = data
        // 特性四：
        // NaN 和 Infinity 格式的数值及 null 都会被当做 null。
        if ([NaN, Infinity, null].includes(data)) {
            result = 'null'
            // 特性一：
            // `undefined`、`任意的函数`以及`symbol值`被`单独转换`时，会返回 undefined
        } else if (commonKeys1.includes(type)) {
            // 直接得到undefined，并不是一个字符串'undefined'
            return undefined
        } else if (type === 'string') {
            result = '"' + data + '"'
        }

        return String(result)
    } else if (type === 'object') {
        // 特性五:
        // 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化
        // 特性六:
        // Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
        if (typeof data.toJSON === 'function') {
            return jsonstringify(data.toJSON())
        } else if (Array.isArray(data)) {
            let result = data.map((it) => {
                // 特性一:
                // `undefined`、`任意的函数`以及`symbol值`出现在`数组`中时会被转换成 `null`
                return commonKeys1.includes(typeof it) ? 'null' : jsonstringify(it)
            })

            return `[${result}]`.replace(/'/g, '"')
        } else {
            // 特性二：
            // 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
            if (['boolean', 'number'].includes(getType(data))) {
                return String(data)
            } else if (getType(data) === 'string') {
                return '"' + data + '"'
            } else {
                let result = []
                // 特性八
                // 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性
                Object.keys(data).forEach((key) => {
                    // 特性三:
                    // 所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
                    if (typeof key !== 'symbol') {
                        const value = data[key]
                        // 特性一
                        // `undefined`、`任意的函数`以及`symbol值`，出现在`非数组对象`的属性值中时在序列化过程中会被忽略
                        if (!commonKeys1.includes(typeof value)) {
                            result.push(`"${key}":${jsonstringify(value)}`)
                        }
                    }
                })
                return `{${result}}`.replace(/'/, '"')
            }
        }
    }
}

    let json = JSON_Stringfy('xaunoa');