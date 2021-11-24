var threeSum = function (nums) {
    let res = [];
    let newNums = nums.sort((a, b) => a - b);
    console.log(newNums);
    if(nums.length < 3) return res;

    for (let i = 0; i < newNums.length; i++) {
        let L = i + 1, R = newNums.length - 1;

        /*固定位前后相同，肯定重复*/
        /*
            当前位和前一位相同，跳过当前位
                ***注意：只能和前一位比较，因为前一位作为基准位时，当前位使用过；如果和后一位比，当前位还没有使用，直接跳到后一位，会造成缺少
        */
        if(newNums[i] === newNums[i-1]&&i>=0) continue;

        /*前后动态指针*/
        while (L < R) {
            let sum = newNums[L] + newNums[R] + newNums[i];
            if (sum === 0) {
                res.push([newNums[L], newNums[R], newNums[i]]);
                while (newNums[L] === newNums[L + 1]) L++;
                while (newNums[R] === newNums[R - 1]) R--;
                L++;
                R--;
            }
            if (sum > 0) R--;
            if (sum < 0) L++;
        }
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))