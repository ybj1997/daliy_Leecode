var compareVersion = function (version1, version2) {
    let arr1 = version1.split('.').map(item => parseInt(item));
    let arr2 = version2.split('.').map(item => parseInt(item));
    console.log(arr1,arr2)
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        console.log(arr1[i],arr2[i]);
        if (!arr1[i]) {
            arr1[i] = 0;
        }
        if (!arr2[i]) {
            arr2[i] = 0;
        }
        if (arr1[i] > arr2[i]) return 1;
        if (arr1[i] < arr2[i]) return -1;
    }
    return 0;
};

console.log(compareVersion("1.0.1","1"));