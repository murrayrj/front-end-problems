/*
Approach 1: Brute Force
Runtime: 56 ms, faster than 97.14% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 39.9 MB, less than 88.24% of JavaScript online submissions for Contains Duplicate.
*/
/*
Intuition
Utilize a dynamic data structure that supports fast search and insert operations.
*/
/*
Search operations is O(n) in an unsorted array. Utilizing a data structure with faster search time will speed up the entire algorithm.
For a Hash Table (HashSet or HashMap in Java), search() (has()) and insert() (add()) are both O(1) on average. Therefore, by using hash table, we can achieve linear time complexity for finding the duplicate in an unsorted array.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};