const nums1 = [1, 2, 3, 2, 4, 2, 1];
const nums2 = [3, 1, 3, 2];
/*
思路1: 利用filter加hash表
*/
var intersection1 = function (nums1, nums2) {
    let map = {};
    return nums1.filter((item, index) => {
        if (!map[item] && nums2.includes(item)) {
            map[item] = true;
            return map[item];
        }
    })
}

/*
思路2:先去重,再利用哈希表
*/
const intersection2 = (nums1, nums2) => {
    let res = [];
    let newNums1 = [...new Set(nums1)];
    let newNums2 = [...new Set(nums2)];
    let map = new Map();

    for(let x of newNums1){
        map.set(x,true);
    }
    for(let x of newNums2){
        if(map.has(x)){
            res.push(x);
        }
    }
    return res;
}
/*
思路3:先hash表找出所有交集,再利用Set去重
*/