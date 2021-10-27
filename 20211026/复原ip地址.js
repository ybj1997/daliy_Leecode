/*
思路：字符串从头开始，每次可以划分为：1-3位为有效位 与 一个子串;字串同样采用父串的方式再分解;最小字串为:刚好分完整个字符串并且形式为“xxx.xxx.xxx.xxx”;因此采用递归
限制条件：1.不能存在除数字以外的字符；2.每次划分两位以上有效位时开头不为'0';3.三位有效位时不能大于255;4.每次切割长度不能超过s本身长度
*/

var restoreIpAddresses = function (s) {
    if (s === "") return [];
    if (/^\d+$/.test(s)) {
        const res = [];
        const traserval = (subRes, start) => {
            if (subRes.length === 4 && start === s.length) {
                res.push(subRes.join('.'));
                return;
            }
            if (subRes.length === 4 && start < s.length) return;
            for (let len = 1; len <= 3; len++) {
                if (start + len > s.length) return;
                const str = s.substr(start, len);
                if (len === 3 && +str > 255) return;
                if (len !== 1 && str[0] === '0') return;
                subRes.push(str);
                traserval(subRes, start + len);
                subRes.pop();//回溯
            }
        }

        traserval([], 0);
        return res;
    }

};