/*
    思路：动态规划(巧用尾值相同最小长度为1，不同最小长度为0;以相同的规则判断前缀子数组)
    dp[i][j]:A数组长度为i，末尾值为A[i-1];B数组长度为j，末尾值为B[j-1]的最长公共子数组
    公式：当A[i-1] = b[j-1]时,dp[i][j] = dp[i-1][j-1] + 1;
        当A[i-1] != b[j-1]时,dp[i][j] = 0;
    初始化： 当i=0 || j=0时;dp[0][j] = 0,dp[i][0] = 0
    遍历顺序:以A数组为标准遍历B数组或者反过来都可以
*/

var findLength = function (nums1, nums2) {
    let res = 0;
    let Alen = nums1.length + 1;
    let Blen = nums2.length + 1;
    let dp = new Array(Alen).fill().map(item => new Array(Blen).fill(0))


    //遍历顺序
    for (let i = 1; i < Alen; i++) {
        for (let j = 1; j < Blen; j++) {
            //公式
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(dp[i][j], res);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return res;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))