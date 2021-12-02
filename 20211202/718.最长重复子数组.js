var findLength = function (nums1, nums2) {
    let res = 0;
    let len1 = nums1.length + 1;
    let len2 = nums2.length + 1;
    let dp = new Array(len1).fill().map(item => new Array(len2).fill(0))
    console.log(dp);

    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i-1][j-1]+1;
            }
            res = Math.max(res,dp[i][j]);
        }
    }
    return res
};

console.log(findLength([1,0,0,0,1],[1,0,0,1,1]))