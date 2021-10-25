/*题目*/
let str = 'sadawdwa1232sadawd132c';//用正则将数字匹配出来加一

let new_str = str.replace(/(\d+)(\w+)(\d{3})/g, (match,p1,p2,p3) => {
    console.log(match);
    p1 = (parseInt(p1)+1).toString();
    p3 = (parseInt(p3)+1).toString();
    return [p1,p2,p3].join('')
})
//repalce正则用法：repalce(RegExp,fn(match,p1...pn))
//RegExp将需要替换的匹配出来，成原子组
//fn参数：第一个是匹配出来的整个字符串，后面的一个参数代表一个字符串
//返回值替换第一个参数，放到字符串中

console.log(new_str);