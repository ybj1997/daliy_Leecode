Object.assign1 = (obj,...source) => {
    if(obj === null || obj === undefined){
        throw new Error("xxxx");
    }

    let res = Object(obj);
    source.forEach(item => {
        if(obj != null){
            for(let k in item){
                if(item.hasOwnProperty(k)){
                    res[k] = item[k];
                }
            }
        }
    })
    return res;
}

function fn(){}

let obj = Object.assign(undefined,fn)
console.log(obj);