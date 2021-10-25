var isAnagram = function(s, t) {
    const map = new Map()
    for (let x of s) {
        let times = map.get(x)
        if(!times){
            map.set(x,1)
        }
        else{
            times++
            map.set(x,times)
        }
    }
    console.log(map,'map_a');
    for (let y of t) {
        let times = map.get(y);
        if (times > 0) {
            times--;
            map.set(y, times)
            console.log(map,222);
        } else if (times === 0 || times === undefined) {
            return false
        }
    }
    if([...map.values()].find(x => x>0)) return false;
    return true
};

console.log(isAnagram("ab", "a"))