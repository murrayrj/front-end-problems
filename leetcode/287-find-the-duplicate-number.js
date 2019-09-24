/*
Runtime: 56 ms, faster than 79.27% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 35.6 MB, less than 71.43% of JavaScript online submissions for Find the Duplicate Number.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let p = nums[0];
    let p1 = nums[0];
    let q = nums[0];
    while (1) {
        p = nums[p];
        q = nums[nums[q]];
        if (p === q) {
            break;
        }
    }
    let q2 = p;
    while (p1 != q2) {
        p1 = nums[p1];
        q2 = nums[q2];
    }
    return p1;
};