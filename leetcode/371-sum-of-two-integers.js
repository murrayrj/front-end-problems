/*
Runtime: 64 ms, faster than 78.81% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 36.5 MB, less than 93.75% of JavaScript online submissions for Linked List Cycle.
*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b != 0) {
        const t = a ^ b;
        b = (a & b) << 1;
        a = t;
    }
    return a;
};