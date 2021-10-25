var firstUniqChar = function(s) {
    let arr = Array.from(s)
    let map = new Map()
    for(let x of arr){
        let times = map.get(x);
        if(!times){
            map.set(x,1);
        }else{
            times++
            map.set(x,times)
        }
    }
    let keys = [...map.keys()];
    let values = [...map.values()];
    console.log(keys,values);
    for(let i=0;i<keys.length;i++){
        if(values[i] === 1) 
            return arr.indexOf(keys[i])
    }return -1
};

console.log(firstUniqChar("dddccdbba"))