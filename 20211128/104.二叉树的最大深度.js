/*递归*/
var maxDepth = function (root) {
    let head = root;
    let deep = 0;

    const dfs = (root,flag) => {
        if(!root) {
            deep = Math.max(deep,flag);
            return;
        }
        flag++;
        dfs(root.left,flag);
        dfs(root.right,flag);
    }
    dfs(head,0);

    return deep;
};
/*层序遍历*/