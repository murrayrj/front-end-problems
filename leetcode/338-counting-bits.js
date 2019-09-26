/*
Runtime: 88 ms, faster than 93.62% of JavaScript online submissions for Counting Bits.
Memory Usage: 40 MB, less than 100.00% of JavaScript online submissions for Counting Bits.
*/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let i;
    var array = [0];
    for (i = 1; i <= num; i++) {
        if (i & 1) {
            array[i] = array[i >> 1] + 1;
        } else {
            array[i] = array[i >> 1];
        }
    }
    return array;
};
