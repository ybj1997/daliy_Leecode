/*ES6*/
function flattenES6(arr) {
    let i = 0;
    while (arr.some(item => Array.isArray(item))) {
        console.log(...arr);//...展开运算符，将同一级的的元素分开
        arr = [].concat(...arr);//[].concat(item1,item2·····itemx)将多个元素合成一个数组
    }
    return arr
}
flattenES6([1, 3, [32, [123, [21],8,9,0,],21,4,2,1]])

/*ES5*/
function flattenES5(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenES5(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

/*ES6数组方法*/
let arr = [1, 3, [32, [123, [21],8,9,0,],21,4,2,1]];

console.log([["B","C"],["D","B"],["C","A"]].flat(Infinity))