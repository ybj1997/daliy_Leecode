var twoSum = function (nums, target) {
    let res = [];

    let L = 0;
    while (L < nums.length) {
        tar = target - nums[L];
        for (let R = L+1; R < nums.length; R++) {
            if (nums[R] === tar) {
                res.push(L, R);
            }
        }
        L++;
    }
    return [...new Set(res)];
};