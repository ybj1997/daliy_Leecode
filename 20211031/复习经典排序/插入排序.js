console.log(insertsort([2, 3, 6, 1, 4, 6, 21, 9, 13]));

function insertsort(arr) {//从索引1开始比较
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let crtValue = arr[i];//先把当前位置的值保留下来
        while (j > 0 && crtValue < arr[j - 1]) {
            arr[j] = arr[j - 1];//将前面大的值向后移动
            j--;
        }
        arr[j] = crtValue;
    }
    return arr;
}