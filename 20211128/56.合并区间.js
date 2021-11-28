var merge = function (intervals) {
    let res = [];
    /*由于根据一族的第一个比较，所以应该把数组按照第一个的大小进行排序*/
    intervals.sort((a, b) => a[0] - b[0]);
    let start = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let crt = intervals[i];
        if (start[1] >= crt[0]) {
            start[1] = Math.max(start[1], crt[1]);
        } else {
            res.push(start);
            start = crt;
        }
    }
    res.push(start);
    return res;
};