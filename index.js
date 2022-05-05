/*数组排序*/
// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]];
//             }
//         }
//     }
//     return  arr
// }
// function quicksort(arr) {
//     if(arr.length < 2) return arr;
//     let l = [], r = [];
//     let mid = Math.floor(arr.length/2);
//     let midValue = arr.splice(mid, 1)[0];
//     for(let x of arr){
//         if(x>midValue){
//             r.push(x);
//         }else{
//             l.push(x);
//         }
//     }
//     return quicksort(l).concat(midValue,quicksort(r));
// }
// function selectsort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//         }
//     }
//     return arr;
// }
// function insertsort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let crtIndex = i,crtValue = arr[i];
//         while(crtValue < arr[crtIndex-1] && crtIndex>0){
//             arr[crtIndex] = arr[crtIndex-1];
//             crtIndex--;
//         }
//         arr[crtIndex] = crtValue;
//     }
//     return arr;
// }
// console.log(insertsort([1, 3, 34, 5, 6, 4, 2, 1, 3, 56]));
/*数组原型方法*/
// Array.prototype.forEach1 = function (cb, thisArg) {
//     if (this == null) {
//         throw new Error("xxx");
//     }
//     if (typeof cb !== 'function') {
//         throw new Error("xxx");
//     }

//     // let O = Object(this);
//     // let length = O.length>>>0;
//     let len = this.length;
//     let k = 0;
//     while (k < len) {
//         if(k in this) {
//             cb.call(thisArg,this[k],k,this)
//         }
//         k++
//     }
// }
// arr.forEach1(item => console.log(item+1))

// Array.prototype.map1 = function(cb, thisArg){
//     let len = this.length;
//     let k = 0;
//     let res = [];
//     while(k<len){
//         if(k in this){
//             res[k] = cb(this[k],k,this);
//         }
//         k++;
//     }
//     return res;
// }
// let arr = [12, 3, 4, 5]
// let newarr = arr.map1(item=> item+1);

// Array.prototype.filter1 = function(cb, thisArg){
//     let len = this.length;
//     let k=0;
//     let res = [];
//     while(k<len){
//         if(k in this){
//             if(cb.call(thisArg,this[k],k,this)){

//                 res.push(this[k]);
//             }
//         }
//         k++;
//     }
//     return res;
// }
// let arr = [12, 3, 4, 5]
// let newarr= arr.filter1(item => item>10);
// console.log(newarr);

// Array.prototype.some1 = function (cb, thisArg) {
//     let len = this.length;
//     let k = 0;
//     while (k < len) {
//         if (k in this) {
//             if(cb.call(thisArg, this[k],k,this)){
//                 return true;
//             }
//         }
//         k++;
//     }
//     return false;
// }
// let arr = [12, 3, 4, 5];
// console.log(arr.some1(item => item>11));

// Array.prototype.reduce1 = function (cb, initValue) {
//     let len = this.length;
//     let k = 0;
//     let acc;
//     //判断有无初始值
//     if (arguments.length > 1) {
//         acc = initValue;
//     } else {
//         if (this.length === 0) {
//             throw new Error("");
//         }
//         acc = this[k++];
//     }
//     while (k < len) {
//         if (k in this) {
//             acc = cb.call(undefined,acc,this[k],k,this);
//         }
//         k++;
//     }
//     return acc;
// }
// let arr=[];
// console.log(arr.reduce1((pre,crt,crtIndex,crtArr)=>{
//     return pre+crt
// }))

// Function.prototype.call1 = function(thisArg, ...params){
//     const context = thisArg || window;
//     context.fn = this;
//     let res = eval(`context.fn(...params)`);
//     delete context.fn;
//     return res;
// }
// Function.prototype.call2 = function(thisArg){
//     let context = thisArg || window;
//     context.fn = this;
//     let p = [];

//     for(let i=1;i<arguments.length;i++){
//         p.push('arguments['+i+']'); 
//     }
//     let res = eval(`context.fn(${p})`);
//     delete context.fn;
//     return res;
// }

// Function.prototype.call1 = function(thisArg, params){
//     const context = thisArg || window;
//     context.fn = this;
//     let res = eval(`context.fn(...params)`);
//     delete context.fn;
//     return res;
// }

// Function.prototype.bind1 = function(thisArg, ...params){
//     let self = this;
//     let x = function(...param){
//         let finalParam = [...params,...param];
//         if(this instanceof x){
//             self.apply(this,finalParam);
//         }else{
//             self.apply(thisArg,finalParam);
//         }
//     }
//     x.prototype = Object.create(this.prototype);
//     return x;
// }
// let obj = { age: 18}

// function fn(x,y,z,f){
//     console.log(this);
//     console.log(x+y+z+f);
//     return this.age+1;
// }
// let P = fn.bind(obj,1,2);
// let p1 = new P(3,4);
// p1.name = 'ybj';
// console.log(p1.__proto__);
// function matrix(n){
//     let res = [];
//     if(n===0) return res;
//     let x=1;
//     for(let i=0;i<n;i++){
//         let crtItem = [];
//         for(let j=0;j<n;j++){
//             crtItem.push(x);
//             x++;
//         }
//         if(i%2 !== 0){
//             crtItem.reverse();
//         }
//         res.push(crtItem);
//     }
//     return res;
// }
// //打印结果
// console.log(matrix(10));
// function m(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let crtItem = arr[i];
//         let map = new Map();
//         map.set(crtItem, true);
//         for (let l = i + 1; l < arr.length; l++) {
//             if(map.has(arr[l])){
//                 res = Math.max(res,l-i);
//                 break;
//             }
//             map.set(arr[l],true);
//         }
//     }
//     return res;
// }
// console.log(m([1,2,3,42,1,3,4,2,1,4,6,2,undefined]))

var a;

function fn() {
    if (!a) {
        a = 8;
    }

}
fn();
console.log(a);