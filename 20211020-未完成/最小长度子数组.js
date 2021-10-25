var minSubArrayLen = function (target, nums) {
    let minLen = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return 1;
        let preSum = nums[i];
        let L = i + 1;
        let flag = 0;

        while (L < nums.length) {
            preSum += nums[L] ;
            if (preSum >= target) {
                flag = L - i + 1;
                break;
            }
            else{
                flag = Math.max(minLen,flag);
            }
            L++;
        }
        minLen = Math.min(minLen,flag);
    }
    return minLen;
};

console.log(minSubArrayLen(7,[1,1,1,1,1,7]));