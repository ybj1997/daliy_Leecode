var addStrings = function (num1, num2) {
    let res = [];
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let carry = 0;//进位

    while (len1 >= 0 || len2 >= 0 || carry > 0) {
        //优化:将判断和赋值放在一起
        let Value1 = len1 >= 0 ? parseInt(num1[len1]) : 0;
        let Value2 = len2 >= 0 ? parseInt(num2[len2]) : 0;
        res.unshift((Value1 + Value2 + carry) % 10)
        carry = Math.floor((Value1 + Value2 + carry) / 10);
        len1--;len2--;
    }
    return res.join('').toString();
}

console.log(addStrings("408", "5"));