var pathSum = function (root, targetSum) {
    let res = [];
    if(!root) return res;

    const dfs = (root, tar, path) => {
        if (!root.left && !root.right && tar-root.val === 0) {
            res.push([...path]);
            return;
        }
        if (!root.left && !root.right) {
            return;
        }
        tar = tar - root.val;
        if(root.left){
            path.push(root.left.val);
            dfs(root.left, tar, path);
            path.pop();
        }
        if(root.right){
            path.push(root.right.val);
            dfs(root.right, tar, path);
            path.pop();
        }
    }
    dfs(root, targetSum, [root.val])
    return res;
};