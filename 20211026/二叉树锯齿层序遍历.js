/*
思路:二叉树层序遍历的基础上，当层数为偶数时，反转
*/

var zigzagLevelOrder = function (root) {
    let res = [];
    if (!root) return res;
    let queue = [root];
    let flag = 0;

    while (queue.length !== 0) {
        flag++;//遍历层数标志;
        let L = queue.length;
        let crtItem = [];
        for (let i = 0; i < L; i++) {
            let node = queue.shift();
            crtItem.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        if (flag % 2 === 0) {//偶数
            crtItem.reverse();
        }
        res.push(crtItem);
    }
    return res;
};