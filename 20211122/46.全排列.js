/*
    思路:递归回溯
                    []
            [1]     [2]     [3] 
          [2] [3] [1] [3] [2] [1] 
*/

var permute = function(nums) {
    let res = [];
    let used = {};

    const dfs = (path)=>{
        //每一个path的递归出口
        if(path.length === nums.length){
            //浅拷贝
            return res.push([...path]);
        }

        for(let x of nums){
            if(used[x] === true) continue;
            path.push(x);
            used[x] = true;
            dfs(path);//递归，第一次遍历x:1->2,3->3,2;第二次遍历x:2->1,3->3,1;第三次遍历x：3->1,2->2,1
            //递归完毕回溯used和path
            path.pop();
            used[x] = false;
        }
    }
    dfs([]);
    return res;
};