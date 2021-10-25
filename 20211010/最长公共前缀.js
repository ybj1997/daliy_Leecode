var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        // let arr = Array.from(strs[i])
        let arr = strs[i].split('')
        let x = 0;
        for (; x < Math.min(arr.length, [...ans].length); x++) { 
            if(arr[x] !== ans[x]) break;
        }
        ans = ans.substr(0,x);
        if(x === 0) return '';
    }
    return ans
};

console.log(longestCommonPrefix(["abcde", "abc", "abcdefgh"]))