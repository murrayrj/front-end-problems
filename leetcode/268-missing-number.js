/*
Runtime: 56 ms, faster than 90.05% of JavaScript online submissions for Missing Number.
Memory Usage: 36 MB, less than 80.00% of JavaScript online submissions for Missing Number.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    const l = nums.length;
    for (var i = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
    }
    var arraySum = ((l * (l + 1))) / 2;
    return arraySum - sum;
};