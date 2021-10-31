console.log(quicksort([2, 3, 6, 1, 4, 6, 21, 9, 13]))

function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let left = [], right = [];
    let mid = Math.floor(arr.length / 2);
    let midValue = arr.splice(mid, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(midValue, quicksort(right));
}