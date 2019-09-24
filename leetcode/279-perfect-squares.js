/*
Runtime: 112 ms, faster than 89.18% of JavaScript online submissions for Perfect Squares.
Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Perfect Squares.
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let i, j, min;
    let squareRoot = 1;
    const solutions = [];
    for (i = 1; i < n + 1; i++) {
        if (i === squareRoot * squareRoot) {
            solutions[i] = 1;
            squareRoot++;
        } else {
            min = i;
            for (j = squareRoot - 1; j > 0; j--) {
                min = Math.min(min, 1 + solutions[i - (j * j)]);
            }
            solutions[i] = min;
        }
    }
    return solutions[n];
};