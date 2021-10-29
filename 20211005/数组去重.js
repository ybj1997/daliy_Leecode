/*ES5数组去重*/
function uniqueES5(arr) {
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item, 0) === index;
    })
}

/*ES6数组去重*/
let uniqueES6 = arr => [... new Set(arr)] 
console.log(uniqueES6(["B","C","D","B","C","A"]));
console.log(new Set(["B","C","D","B","C","A"]));