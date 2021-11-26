var inorderTraversal = function (root) {
    let res = [];

    /*前序：根左右*/
    const dfs = (root) => {
        if(!root) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    /*中序：左根右*/
    const dfs1 = (root)=>{
        if(!root) return;
        dfs1(root.left);
        res.push(root.val);
        dfs1(root.right);
    }

    /*后序：左右根*/
    const dfs2 = (root)=>{
        if(!root) return;
        dfs1(root.left);
        dfs1(root.right);
        res.push(root.val);
        
    }

    return res;
};