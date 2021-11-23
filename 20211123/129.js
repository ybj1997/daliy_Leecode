/*
    思路:二叉树深度遍历
*/

var sumNumbers = function (root) {
    if(!root) return 0;
    let res = 0;
    const dfs = (root,path) => {
        if(!root.left && !root.right){
            res += parseInt(path.join(''))
            return;
        }
        if(root.left){
            path.push(root.left.val);
            dfs(root.left,path);
            path.pop();
        }
        if(root.right){
            path.push(root.right.val);
            dfs(root.right,path);
            path.pop();
        }
    }

    dfs(root,[root.val]);
    return res;
};