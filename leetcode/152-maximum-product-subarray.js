/*
Runtime: 52 ms, faster than 93.40% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Maximum Product Subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let i;
    let product = nums.length ? nums[0] : 0;
    let max = nums[0];
    let min = nums[0];
    for (i = 1; i < nums.length; i++) {
        const element = nums[i];
        const t1 = max * element;
        const t2 = min * element;
        max = Math.max(Math.max(t1, t2), element);
        min = Math.min(Math.min(t1, t2), element);
        product = Math.max(product, max);
    }
    return product;
};