const isObject = (target) => (typeof(target) === "object" || typeof(target) === "function") && target !== null;

function deepclone(target,map = new WeakMap()) {
    if(map.get(target)){
        return target;
    }

    let constructor = target.constructor;//获取对象的构造函数
    if(/^(Date|RegExp)$/i.test(constructor.name)){//判断是否为内置对象类型
        return new constructor(target);//返回一个新的特殊对象
    }

    if(isObject(target)){
        map.set(target, true);//为循环引用对象做标记
        const cloneObj = Array.isArray(target) ? [] : {};
        for(let key in target){
            if(object.hasOwnProperty(key)){
                cloneObj[key] = deepclone(target[key],map);
            }
        }
        return cloneObj;
    }else{
        //如果不是引用类型，直接返回
        return target;
    }
}

