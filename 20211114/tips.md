一、Tip1

> Array.slice(start,end) 和 arr.concat(item1，item2，...) 都可以用于数组的拷贝

```javascript
let arr = [1,2,3,4];
//slice复制
let NewArr1 = arr.slice();
//concat复制
let NewArr = arr.concat();
```

 slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝 :1st_place_medal:

------

二、 Tip2

> Array.prototype.slice.call（Arr，start，end）可将类数组(arguments，NodeList)，字符串(String)转换成数组。 

> Arrar.from（）可将 Array.from() 可将类数组(arguments,NodeList)，可迭代对象(Set,Map)，字符串(String)转换成数组 