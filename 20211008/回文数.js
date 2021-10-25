var isPalindrome = function (x) {
    let arr = [...x.toString()];
    let length = arr.length;
    console.log(arr);
    if (arr[0] === '-') return false;
    for (let i = 0; i < length; i++) {
        if (arr[i] !== arr[length - i - 1]) return false;
    }
    return true;
};

console.log(isPalindrome(121));