/*
Runtime: 76 ms, faster than 89.42% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 42.1 MB, less than 80.00% of JavaScript online submissions for Product of Array Except Self.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf (nums) {
    let product = 1;
    const l = nums.length;
    const answer = [];
    for (var i = 0; i < nums.length; i++) {
        answer[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        answer[i] *= product;
        product *= nums[i];
    }
    return answer;
};
// Unoptimised solution
var productExceptSelf = function (nums) {
    const l = nums.length;
    const answer = [];
    let j = 0;
    while (j < l) {
        let product = 1;
        for (let k = 0; k < l; k++) {
            if (k === j) {
                continue;
            }
            product = product * nums[k];
        }
        array.push(product);
        j++;
    }
    return answer;
};