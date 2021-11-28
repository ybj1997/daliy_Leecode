/*
    思路：动态规划
    dp[i]:筹齐i元，需要的最小硬币数；i最后为amount
    公式：dp[i] = dp[i-x]+1;x为[1,2,5]其中一个硬币
    遍历顺序：从1元开始，找最小硬币数
    初始化：假设到dp[i]时，Array(amout+1).fill()
*/
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let x of coins) {
            if (i - x >= 0) {
                dp[i] = Math.min(dp[i], dp[i - x] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};