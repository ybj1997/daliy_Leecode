var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m,...nums2).sort((a,b)=>a-b);
    console.log(nums1);
}
merge([1,2,3,0,0,0],3,[2,5,6],3)