var climbStairs = function (n) {
    let p = 1;let q = 2;
    if(n===1) return p;
    if(n===2) return q;
    return climbStairs(n-1)+climbStairs(n-2);
}

console.log(climbStairs());