var maxAreaOfIsland = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(res,fn(i,j,0));
            }
        }
    }

    function fn(i, j, s) {
        if (i >= 0 && i < grid.length && j >= 0 && j < grid.length && grid[i][j] === 1){
            grid[i][j] = 0;
            s++;
        }else{
            console.log(grid);
            return s;
        }
        fn(i,j+1,s);fn(i,j-1,s);fn(i+1,j,s);fn(i-1,j,s);
    }

    return res;
};

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]
))