var spiralOrder = function (matrix) {
    let res = [];
    if (matrix.length === 0) return res;

    let top = 0, right = matrix[0].length - 1, left = 0, bottom = matrix.length - 1;
    while (top < bottom && left < right) {
        console.log('进入循环');
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
        console.log(res, '111');
        for (let i = top + 1; i <= bottom; i++) res.push(matrix[i][right]);
        console.log(res, '222');
        for (let i = right - 1; i >= left; i--) res.push(matrix[bottom][i]);
        for (let i = bottom - 1; i > top; i--)res.push(matrix[i][left]);
        top++; right--; bottom--; left++;
    }
    //退出循环时，top, bottom, right, left不满足条件的一组正好进入下一个循环
    console.log(top, bottom, right, left);
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
console.log(spiralOrder(
    [[1, 11],
    [2, 12],
    [3, 13],
    [4, 14],
    [5, 15],
    [6, 16],
    [7, 17],
    [8, 18],
    [9, 19],
    [10, 20]]
));
// console.log(spiralOrder(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12]
//     ]
// ));

// console.log(spiralOrder(
//     [
//         [1, 2, 3, 4, 5],
//         [6, 7, 8, 9, 10],
//         [11, 12, 13, 14, 15],
//         [16, 17, 18, 19, 20],
//         [21, 22, 23, 24, 25]
//     ]
// ));

// console.log(spiralOrder(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// ));

// console.log(spiralOrder(
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12]
//     ]
// ));
