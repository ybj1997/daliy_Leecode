var search = function (nums, target) {
    let start = 0; let end = nums.length - 1;

    while(start<end){
        let mid = Math.floor((end - start) / 2) + start;
        let midValue = nums[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))