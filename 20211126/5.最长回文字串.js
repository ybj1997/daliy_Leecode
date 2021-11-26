/*
    思路：
        遍历，假设一位为对称中心
        以中心向两边扩散取最大字串
*/

var longestPalindrome = function (s) {
    let arr = s.split('');
    let len = 0;//标记最大
    let res = '';

    const fn = (left, right) => {
        while (arr[left] === arr[right] && left>=0 &&right<arr.length) {
            left--; right++;
        }
        if (right - left - 1 > len) {
            len = Math.max(len, right - left - 1)
            res = arr.slice(left+1,right).join('');
        }
    }

    if(s.length<2) return s;
    for (let i = 0; i < s.length; i++) {
        fn(i, i);
        fn(i, i + 1);
    }
    return res;
};