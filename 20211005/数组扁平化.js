/*ES6*/
function flattenES6(arr) {
    let i = 0;
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
        console.log(i++);
        console.log(arr);
    }
    return arr
}

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