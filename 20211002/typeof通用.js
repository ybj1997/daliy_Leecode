function Typeof(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
/*字符串方法*/

//1.split(separator,limitLen)将数组分割为指定长度的数组
//2.slice(start,end)切片指定位置的字符串（可以使用负数）
//3.substring(start,end)提取指定索引之间的字符


/*slice和substring的区别在于索引能否用负数*/

// let str = 'hello world';
// console.log(str.slice(1,3))
// console.log(str.substring(1,3))

function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);
}

let p1 = new Person('ybj',18);
console.log(p1);