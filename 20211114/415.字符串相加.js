var addStrings = function (num1, num2) {
    let res = [];
    let newNum1 = Array.from(num1);
    let newNum2 = num2.split('');
    let len1 = newNum1.length - 1;
    let len2 = newNum2.length - 1;
    let pre = 0;

    //为什么用while遍历
    //因为要从后向前遍历，如果用for是从前向后递增，则倒着相加，会错位
    while (len1 >= 0 || len2 >= 0 ) {
        if (!newNum1[len1]) {
            newNum1[len1] = 0;
        } 
        if (!newNum2[len2]) {
            newNum2[len2] = 0;
        }
        //当前位总和等于当前位加上进位
        let crtValue = parseInt(eval(`${newNum1[len1]}+${newNum2[len2]}`)) + pre;
        //当大于10时进位，更新pre用于下一个循环加在前一位上
        if (crtValue >= 10) {
            res.unshift(crtValue % 10);
            pre = Math.floor(crtValue / 10);
            //当顶级位相加还有进位时
            if (len1 - 1 < 0 && len2 - 1 < 0) {
                res.unshift(pre);
            }
        } else {//当小于时，进位pre就为0
            res.unshift(crtValue);
            pre = 0;
        }
        len1--;
        len2--;
    }
    return res.join('').toString();
};