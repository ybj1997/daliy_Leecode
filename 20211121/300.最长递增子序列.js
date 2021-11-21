/*
    思路:动态规划
    dp[i]:到当前i为止的最长递增子序列
    dp[i] = dp[j]+1:j是0-（i-1）中最长的递增子序列
*/

var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    let res = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
        res = Math.max(dp[i],res);
    }

    return res;
};