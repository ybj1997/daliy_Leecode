var reverse = function (x) {
    let arr = [...x.toString()].reverse().join('');
    let length = arr.length;
    if(arr[length - 1] === '-'){
        let y = parseInt(arr);
        return -y
    }
    return parseInt(arr)
};

console.log(reverse(-123));