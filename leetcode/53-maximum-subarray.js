/*
Runtime: 48 ms, faster than 98.73% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 35.2 MB, less than 75.93% of JavaScript online submissions for Maximum Subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let i;
    let sum = 0;
    let max = nums[0];
    for (i = 0; i < nums.length; i++) {
        const element = nums[i];
        sum = sum + element;
        max = Math.max(max, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};
/*
Runtime: 64 ms, faster than 40.82% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 35.2 MB, less than 74.07% of JavaScript online submissions for Maximum Subarray.
*/
var maxSubArray = function (nums) {
    let i;
    let sum = 0;
    let max = nums[0];
    for (i = 0; i < nums.length; i++) {
        const element = nums[i];
        sum = Math.max(sum + element, element);
        max = Math.max(max, sum);
    }
    return max;
};
/*
Runtime: 56 ms, faster than 83.86% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 35.2 MB, less than 75.93% of JavaScript online submissions for Maximum Subarray.
*/
// Dynamic Programming Solution
var maxSubArray = function (nums) {
    let i;
    for (i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i],  nums[i-1] + nums[i]);
    }
    return Math.max(...nums);
};