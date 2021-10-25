function quickSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let preIndex = i - 1;
        while (preIndex >= 0 && current < nums[preIndex]) {
            nums[preIndex + 1] = nums[preIndex];
            preIndex--;
        }
        nums[preIndex + 1] = current;
    }
    return nums;
}

console.log(quickSort([12,4,32,2]));