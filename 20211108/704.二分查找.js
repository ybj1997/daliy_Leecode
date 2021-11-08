var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;//！！！！！
        const midValue = nums[mid];
        if (midValue === target) return midValue;
        else if (midValue < target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}