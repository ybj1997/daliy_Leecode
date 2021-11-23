Object.create1 = (proto, propertiesObj = undefined) => {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('xxx1');
    }
    if (propertiesObj === null) {
        throw new TypeError('xxx2');
    }

    function Temp() { };
    Temp.prototype = proto;
    let newObj = new Temp();

    if (propertiesObj !== undefined) {
        Object.defineProperties(newObj, propertiesObj);
    }
    if(proto === null){
        newObj.__proto__ = null;
    }

    return newObj;
}

function fn(){}

fn.prototype.getName = function(){
    return this.name
}

let obj = Object.create1(fn);

console.log(obj.prototype);