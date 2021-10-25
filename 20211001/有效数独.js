var isValidSudoku = function (board) {
    for (let arrItem of board) {
        arrItem.filter(item => parseInt(item) === Number)
        console.log(parseInt(arrItem));
    }
};
isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."],
     ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
     [".", "9", "8", ".", ".", ".", ".", "6", "."], 
     ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
     ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
     ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
     [".", "6", ".", ".", ".", ".", "2", "8", "."], 
     [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
     [".", ".", ".", ".", "8", ".", ".", "7", "9"]])

     console.log(new Array(9).fill(0).map(() => new Array(9).fill(0)))
     console.log(new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0))));