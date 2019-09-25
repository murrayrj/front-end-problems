/*
Approach 1: Brute Force
Runtime: 108 ms, faster than 43.08% of JavaScript online submissions for Two Sum.
Memory Usage: 34.7 MB, less than 70.25% of JavaScript online submissions for Two Sum.
*/
/*
Time complexity : O(n^2) For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2)
Space complexity : O(1).
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i, j;
    const l = nums.length;
    for (i = 0; i < l; i++) {
        for (j = i + 1; j < l; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
/*
Approach 2: Two-pass Hash Table
Runtime: 56 ms, faster than 83.03% of JavaScript online submissions for Two Sum.
Memory Usage: 36.1 MB, less than 14.05% of JavaScript online submissions for Two Sum.
*/
/*
Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).
Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
*/
var twoSum = function (nums, target) {
    let i, j;
    const map = {};
    const l = nums.length;
    for (i = 0; i < l; i++) {
        map[nums[i]] = i;
    }
    for (j = 0; j < l; j++) {
        const complement = target - nums[j];
        if ({}.hasOwnProperty.call(map, complement) && map[complement] != j) {
            return [j, map[complement]];
        }
    }
};
/*
Approach 3: One-pass Hash Table
Runtime: 52 ms, faster than 92.75% of JavaScript online submissions for Two Sum.
Memory Usage: 36.3 MB, less than 11.16% of JavaScript online submissions for Two Sum.
*/
/*
Time complexity : O(n). We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.
Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
*/
var twoSum = function (nums, target) {
    const map = {};
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        const complement = target - nums[i];
        if ({}.hasOwnProperty.call(map, complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
};