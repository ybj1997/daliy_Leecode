var canConstruct = function (ransomNote, magazine) {
    const map = new Map()
    for (let x of magazine) {
        let times = map.get(x)
        if(!times){
            map.set(x,1)
        }
        else{
            times++
            map.set(x,times)
        }
        console.log(map,'111');
    }
    for (let y of ransomNote) {
        let times = map.get(y);
        console.log(times);
        if (times > 0) {
            times--;
            map.set(y, times)
            console.log(map);
        } else if (times === 0 || times === undefined) {
            return false
        }
    }
    return true
};

console.log(canConstruct('a', 'b'));