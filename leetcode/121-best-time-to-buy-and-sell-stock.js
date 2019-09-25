/*
Approach 1: Brute Force
Runtime: 300 ms, faster than 21.34% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 35.4 MB, less than 70.37% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
/*
Time complexity : O(n^2)). Loop runs (n(n-1))/2 times.
Space complexity : O(1). Only two variables - maxProfit and profit are used.
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i, j;
    const l = prices.length;
    let maxProfit = 0;
    for (i = 0; i < l; i++) {
        for (j = i + 1; j < l; j++) {
            const profit = prices[j] - prices[i];
            if (maxProfit < profit && j > i) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
/*
Approach 2: One Pass
Runtime: 52 ms, faster than 95.17% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 35.7 MB, less than 22.22% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
/*
Time complexity : O(n). Only a single pass is needed.
Space complexity : O(1). Only 3 variables are used.
*/
var maxProfit = function (prices) {
    let i;
    let maxProfit = 0;
    const l = prices.length;
    let priceHigh = prices[l - 1];
    for (i = l - 1; i >= 0; i--) {
        maxProfit = Math.max(maxProfit, priceHigh - prices[i]);
        priceHigh = Math.max(priceHigh, prices[i]);
    }
    return maxProfit;
};