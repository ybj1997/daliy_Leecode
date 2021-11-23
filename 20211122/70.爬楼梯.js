/*
    思路：动态规划
    dp[i]:到达第i阶的爬的种数
    dp[i] = dp[i-1]+dp[i-2]:第i阶楼梯，规定只能是从i-1阶或者i-2阶得来
    初始化：因为不需要取大小值，所以任意
    遍历顺序：从前往后
    
*/


var climbStairs = function (n) {
    let dp = new Array(n);
    dp[1] = 1; dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};
