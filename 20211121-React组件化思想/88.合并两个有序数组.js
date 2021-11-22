/*
    根据题意，最终数组由nums1得出，而不是函数返回值
    因此应该在原数组上进行操作
*/

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    nums1.sort((a,b)=>a-b);
};