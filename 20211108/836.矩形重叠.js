/*
思路:以rec2为固定参照物
*/

var isRectangleOverlap = function (rec1, rec2) {
    return !(
        rec1[2] <= rec2[0] ||
        rec1[3] <= rec2[1] ||
        rec1[0] >= rec2[2] ||
        rec1[1] >= rec2[3]
    )
};