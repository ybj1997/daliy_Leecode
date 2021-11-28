var levelOrder = function (root) {
    let res = [];
    if (!root) return res;
    let queue = [root];

    while (queue.length) {
        let L = queue.length;
        let crtArr = [];
        for (let i = 0; i < L; i++) {
            let node = queue.shift();
            crtArr.push(node.val);
            for(let x of node.children){
                if(x) queue.push(x);
            }
        }
        res.push(crtArr);
    }

    return res;
};