/*
    思路：一层一层的遍历
*/
var spiralOrder = function (matrix) {
    let res = [];
    if (!matrix) return res;

    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;


    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right]);
        }
        for (let i = right; i > left; i--) {
            res.push(matrix[bottom][i]);
        }
        for (let i = bottom; i > top; i--) {
            res.push(matrix[i][left]);
        }
        top++; left++; bottom--; right--;
    }

    
    if (top === bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
    } else if (left === right) {
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][left]);
        }
    }
    return res;
};