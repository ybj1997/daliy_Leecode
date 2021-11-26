/*
    思路：递归
        以当前节点为为父节点，交换两个子树
        每一层的父节点都是交换左右子树
        最小可能为左右节点都为null就不用交换
*/
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;

    return root;
};