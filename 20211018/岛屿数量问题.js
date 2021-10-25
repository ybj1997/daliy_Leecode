var maxAreaOfIsland = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count++;
                setZero(i,j,grid);
            }
        }
    }
    function setZero(i, j, grid) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        setZero(i, j + 1, grid);
        setZero(i, j - 1, grid);
        setZero(i + 1, j, grid);
        setZero(i - 1, j, grid);
        return s;
    }
    return res;
};