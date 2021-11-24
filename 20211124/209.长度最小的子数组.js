/*
思路：固定一个指针，动态两个指针
*/

var minSubArrayLen = function (target, nums) {
    let minLen = Infinity;


    for (let L = 0; L < nums.length; L++) {
        let R = L + 1;
        let sum = nums[L];
        while (sum < target && R < nums.length) {
            sum += nums[R]
            R++;
        }
        if (sum >= target) {
            minLen = Math.min(minLen, R - L);
        }
    }

    return minLen === Infinity ? 0 : minLen; 
};