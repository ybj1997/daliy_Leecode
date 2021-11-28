/*
    思路：递归
        每一次可以分为1-3位
        每一次的算法一样
        最小情况为刚刚分完
*/
var restoreIpAddresses = function (s) {
    if (s.length === 0) return "";
    /*匹配全是数字*/
    if (/^\d+$/.test(s)) {
        let res = [];

        const dp = (path, flag) => {
            //6.如果刚刚好分割完，并且每次分割也满足，则保存到res中
            if (path.length === 4 && flag === s.length) {
                res.push(path.join('.'));
                return;
            }
            //7.如果是ip地址的形式，但是s没有分割完，则返回
            if (path.length === 4 && flag < s.length) {
                return;
            }

            /*每一次可以分为1-3位*/
            for (let len = 1; len <= 3; len++) {
                if (flag + len > s.length) return;
                let crt = s.substr(flag, len);//1.获得分割的字符串
                if (len >= 2 && crt[0] == 0) return;//2.如果字符串的首位是0则本次分割丢弃
                if (parseInt(crt) > 255) return;//3.如果本次分割数字大于255丢弃
                path.push(crt);//4.记录本次分割的结果
                dp(path, flag + len);
                path.pop();//5.如果丢弃了，则将第4步记录结果丢弃
            }
        }
        dp([], 0);
        return res
    }
};