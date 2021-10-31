console.log(bubblesort([2, 3, 6, 1, 4, 6, 21, 9, 13]))

function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {//后面i个已经排序好了，且最后一个不用排序
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}