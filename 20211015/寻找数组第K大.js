function quickSort(arr, targetIndex, start) {
    if (arr.length <= 1) return arr[0];
    let left = [];
    let right = [];
    const mid = Math.floor(arr.length / 2);
    const midNum = arr.splice(mid, 1)[0];//如果不使用索引返回的是一个数组
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > midNum) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  
    if (left.length + start === targetIndex) {
      return midNum;
    } else if (left.length + start > targetIndex) {
      return quickSort(left, targetIndex, start);
    } else {
      return quickSort(right, targetIndex, left.length + start + 1);
    }
  }
  
  var findKthLargest = function(nums, k) {
    const num = quickSort(nums, nums.length - k, 0);
  
    return num;
  };

  console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));