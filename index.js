// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,nums1.length-m,...nums2);
//     nums1.sort((a,b)=> a-b)
// };

// var merge = function(nums1, m, nums2, n) {
//     let newNums1 = nums1.slice(0,m);
//     let newNums2 = nums2.slice(0,n);
//     nums1 = [...newNums1,...newNums2];
//     nums1.sort((a,b)=>a-b);
//     console.log(nums1);
// }
// merge([1,2,3,0,0,0],
//     3,
//     [2,5,6],
//     3)


// function fn(m,n) {
//     return  m ? fn(m-1,n).concat(n) : []
// }

// console.log(fn(5,3));

// var intersect = function (nums1,nums2) {
//     let arr = [];
//     let map = new Map();

//     for(let x of nums1){
//         let times = map.get(x);
//         if(times){
//             times++;
//             map.set(x,times);
//         }else{
//             map.set(x,1);
//         }
//     }
//     for(let i of nums2){
//         let times = map.get(i);
//         if(times>0){
//             arr.push(i);
//             times--;
//             map.set(i,times);
//         }
//     }
//     return arr;
// };

// console.log(intersect([1, 2, 2, 1], [2]));

// var intersect = function (nums1, nums2) {
//     let NewNums1 = nums1.sort((a, b) => a - b);
//     let NewNums2 = nums2.sort((a, b) => a - b);
//     let x = 0; let y = 0; let arr = [];
//     while (x < NewNums1.length && y < NewNums2.length) {
//         if (NewNums1[x] === NewNums2[y]){
//             arr.push(NewNums1[x]);
//             x++;
//             y++;
//         }else{
//             NewNums1[x]<NewNums2[y]?x++:y++;
//         }
//     }
//     return arr;
// };

// console.log(intersect([1, 2, 2, 1], [2]));

// var maxProfit = function (prices) {
//     let maxprice = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[i] < prices[j]) {
//                 maxprice > prices[j] - prices[i] ? maxprice : maxprice = prices[j] - prices[i];
//             }
//         }
//     }
//     return maxprice;
// };

// console.log(maxProfit([7,1,5,3,6,4]));

// var maxProfit = function (prices) {
//     let minnum = prices[0];let maxprice=0;
//     for(let x of prices){
//         minnum = Math.min(minnum, x);
//         maxprice = Math.max(maxprice, x-minnum);
//     }
//     return maxprice;
// };

// console.log(maxProfit([7, 1, 5, 3, 6,1, 4]))

// var matrixReshape = function (mat, r, c) {
//     let linearArr = [];
//     //将二维数组转化为一维数组
//     for(let x of mat){
//         linearArr.push(...x);
//     }
//     console.log(linearArr.length);
//     //判断是否能够转换
//     if(linearArr.length !== r*c) {
//         return mat;
//     }
//     //遍历行数，生存行
//     for(let i = 0; i < r;i++){
//         const item = [];
//         for(let j = 0; j <c;j++){
//             let a = linearArr.shift()
//             item.push(a);
//         }
//         linearArr.push(item);
//     }
//     return linearArr;
// };

// console.log(matrixReshape([[1, 2], [3, 4], [5, 6], [7, 8]], 1, 4));

// var generate = function(numRows) {
//     let ret = [];
//     for(let i=0;i<numRows;i++){
//         const row = new Array(i+1).fill(1);
//         for(let j=1;j<row.length-1;j++){
//             row[j] = ret[i-1][j-1] + ret[i-1][j];
//         }
//         ret.push(row);
//     }
//     return ret
// };

// console.log(generate());

// var removeDuplicates = function (nums) {
//     const map = new Map();
//     for(let x of nums){
//         let times = map.get(x);
//         if(!times){
//             map.set(x,1);
//         }else{
//             times++;
//             map.set(x,times);
//         }
//     }
//     console.log(map.keys())
// }
// removeDuplicates([1,5,4,8,2,1])

const ws = new WebSocket('URL');
ws.onopen = function(){
    ws.send('massage');
}

ws.onmessage = function(e){
    console.log('receive from server:'+e.data)
}