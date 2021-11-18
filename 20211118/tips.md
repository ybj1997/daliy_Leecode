一、CSS清除浮动

```css
/*方法一*/
.parent {
    overflow: hidden;
}
/*方法二*/
.clearfix::after{
    content:"";
    display:block;
   	clear:both;
    visibilty:hidden;
    height:0;
}
```

二、CSS中特殊的标签

1.p标签时块级标签，但是其不能包含除了它本身之外的任何块元素 ；

2.a标签是内联标签， 但是它可以包含除了它本身外的任意块元素  ；

三、数组拼接的隐式转换

```javascript
let result = [1,2,3,4,'5','6'];
result = "[" + result + "]";
console.log(result);//'[1,2,3,4,5,6]'
```