var maxAreaOfIsland = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(setZero(i, j, grid),res);
            }
        }
    }
    function setZero(i, j, grid) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }
        let s = 1;
        grid[i][j] = 0;
        s += setZero(i, j + 1, grid);
        s += setZero(i, j - 1, grid);
        s += setZero(i + 1, j, grid);
        s += setZero(i - 1, j, grid);
        return s;
    }
    return res;
};
console.log(maxAreaOfIsland(
    [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
));