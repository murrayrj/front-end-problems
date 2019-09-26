/*
Runtime: 60 ms, faster than 84.58% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 34.8 MB, less than 60.00% of JavaScript online submissions for Number of 1 Bits.
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        if (n & 1 === 1) {
            count++;
        }
        n = n >>> 1;
    }
    return count;
};