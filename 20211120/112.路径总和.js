/*
    思路：深度遍历
        1.如果叶子节点刚好为0，则返回true
        2.dfs遍历，当前节点的子节点返回给他的是true，他就返回给他的父节点true;
*/

var hasPathSum = function (root, targetSum) {
    if(!root) return false;
    const dfs = (root, tar)=>{
        if(!root.left && !root.right && tar === 0){
            return true;
        }
        if(!root.left && !root.right){
            return false;
        }

        if(root.left){
            if(dfs(root.left,tar - root.left.val)){
                return true;
            }
        }
        if(root.right){
            if(dfs(root.right,tar - root.right.val)){
                return true;
            }
        }
        return false;
    }
    return  dfs(root,targetSum-root.val)

};