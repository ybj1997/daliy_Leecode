var lengthOfLongestSubstring = function (s) {
    let arr = s.split('');
    let len = 0;

    for (let i = 0; i < arr.length; i++) {
        const L = i;
        let map = new Map();
        map.set(arr[i], true)
        for (let j = L + 1; j < arr.length; j++) {
            if (map.has(arr[j])) break;
            map.set(arr[j], true);
            len = Math.max(len, (j - L + 1))
        }
        console.log(map);
    }
};


lengthOfLongestSubstring("abcabcbb")