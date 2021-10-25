var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let len = 0;
    //利用哈希表
    const map = new Map();

    //移动右指针
    for (let right = 0; right < s.length; right++) {
        //表中已经出现过的字符索引在左指针之后，那么就应该重新开始计算长度
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            
            left = map.get(s[right]) + 1;
        }
        len = Math.max(len, right - left + 1);
        map.set(s[right], right);
    }
    return len;
};
console.log(lengthOfLongestSubstring("abcabcbb"));