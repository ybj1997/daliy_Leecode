/*
    coins = [1,2,5] amount = 11
    思路:首先想到:amount可以由 dp[11] = Math.min( dp[11-1]+1 , dp(11-2)+1 , dp(11-5)+1 )得到，
                 而dp(10)dp(9)dp(6)又各自可以利用该原理往前推
         其次是:利用动态规划(本来是想用递归，因为也符合递归的三个条件)
                思想类似爬楼梯，amount=11，类似于爬11层楼梯
         core:dp[i] = Math.min(dp[i-coins[j]+1]);其中i为当前要爬的楼梯数，j等于当前可以爬1，2，5三种中的一种
*/


const coinChange = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {//当前所在的楼梯数
        for (let coin of coins) {
            if (i - j >= 0) {//不能多爬
                //将dp[i]设为无穷大，比较[1,2,5]三种爬法取最短，作为爬到当前楼梯数i的最短路径
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[i];
}