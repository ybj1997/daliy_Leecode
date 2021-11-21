
var findKthLargest = function (nums, k) {
    let arr = nums.sort((a, b) => a - b);

    return arr.splice(nums.length-k,1);
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))