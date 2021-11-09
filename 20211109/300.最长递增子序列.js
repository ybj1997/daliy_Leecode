var lengthOfLIS = function (nums) {
    let maxLen = 0;
    if (nums.length === 0) return maxLen;

    for (let L = 0; L < nums.length; L++) {
        let R = L + 1;
        let crtValue = nums[L];
        let crtLen = 1;
        while (R < nums.length) {
            if(nums[R] > crtValue) {
                crtLen++;
                crtValue = nums[R];
            }
            R++;
        }
        maxLen = Math.max(maxLen,crtLen);
    }
    return maxLen;
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))