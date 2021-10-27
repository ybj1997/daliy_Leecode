/*

    包含路径总和I和路径总和II

*/
/*************路径总和I****************/
var hasPathSum = function (root, targetSum) {
	//node为当前节点，rnt为目标值减去当前节点值
    const traval = (node, rnt) => {
    	//当前节点为叶子节点，目标值减去当前节点值后等于0
        if (rnt == 0 && !node.left && !node.right) {
            return true;
        }
        //当前节点为叶子节点，目标值减去当前节点值后不等于0
        if (!node.left && !node.right) {
            return false;
        }
        //存在左子节点，递归调用
        //正常是返回true和false都是可以
        //但是只有下一级给你返回的true，你才可以给上一级返回true
        if (node.left && traval(node.left, rnt - node.left.val)){
            return true;
        }
        //存在右子节点，递归调用
        if(node.right && traval(node.right, rnt - node.right.val)){
            return true;
        }
        return false;
    }
    if (!root) return false;
    return traval(root, targetSum - root.val);
};
/*************路径总和II***************/
/*
思路：使用递归，以target为目标递减
递归主要是通过满足条件时来修改res，因此不需要返回值，不满足条件时return就可以
*/

var pathSum = function (root, targetSum) {
    const res = [];

    const dfs = (root,targetSum,path)=>{
        if(targetSum - root.val === 0 && !root.left && !root.right){
             res.push([...path]);//深拷贝path;因为采用回溯的方式，始终使用的是同一引用地址的path
            return;
         }
        if(!root.left && !root.right) return;//叶子节点
        targetSum = targetSum - root.val;
        if(root.left){
            path.push(root.left.val);
            //当前节点不满足第一个if了，递归root.left，满足条件就会修改path，并且会在最小子节点将path推到res中
            dfs(root.left,targetSum,path);
            path.pop();//回溯到当前root节点
        }
        if(root.right){
            path.push(root.right.val);
            dfs(root.right,targetSum,path);
            path.pop();//回溯到当前root节点
        }
        return;//最后不需要返回，满足条件已经在第一个if压入res中了，不满足条件直接退出
    }

    if(!root) return res;
    dfs(root,targetSum,[root.val]);//传入一个path来记录每次递归满足条件的数
    return res;
}