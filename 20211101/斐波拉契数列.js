/*
思路1:递归暴力求解(带记忆功能)
*/

/*
思路2:迭代法
*/
var fib = function (n) {
    if (n === 1) return 1;
    let f0 = 0, f1 = 1;
    let res = 0;
    for (let i = 2; i <= n; i++) {
        let k = f0 + f1;
        res = k;
        f0 = f1;
        f1 = k;
    }
    return res;
};
/*
思路3:迭代法优化
*/
var fib = function (n) {
    let f = [0, 1];
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
};