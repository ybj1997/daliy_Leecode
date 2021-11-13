/*
    思路：dp[i][j]表示i行j列的不同路径数
        由题意只能右移和下移，公式为dp[i][j] = dp[i-1][j]+dp[i][j-1]
        初始化：第一行从左至右，无论走到那个位置都只有一种走法，所以初始化为1       
               第一列从上至下，也一样，所以也初始化为1
        遍历顺序：dp[i][j]由左边和上边相加得出，所以遍历顺序，从左至右从上至下
*/
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill().map(item => new Array(n))

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    //因为只能向右和向下，所以遍历从左至右，从上之下即可
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m-1][n-1]
};