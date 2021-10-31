//选择排序就是比较索引

console.log(selectsort([2, 3, 6, 1, 4, 6, 21, 9, 13]));

function selectsort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
        }
    }
    return arr
}