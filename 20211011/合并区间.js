var merge = function (intervals) {
    const result = [];
    intervals.sort((a,b)=> a[0]-b[0]);
    let prev = intervals[0];//假设第一个就有重合区间

    for(let i = 1;i<intervals.length;i++) {
        let curt = intervals[i];
        //比较假设对象的右区间和每一个curt左区间的大小，
        if(prev[1] >= curt[0]){
            //符合条件就更新假设对象的右区间
            prev[1] = Math.max(curt[1],prev[1]);
        }else{
            //把更新好的假设对象放入新数组中
            result.push(prev);
            //更新假设对象
            prev = curt;
        }
    }
    //比较到最后一个，prev = curt
    result.push(prev);
    return result
};
console.log(merge([[1,3],[2,9],[8,10],[15,18]]));