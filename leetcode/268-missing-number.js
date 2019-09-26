/*
Approach HashSet
Runtime: 72 ms, faster than 37.08% of JavaScript online submissions for Missing Number.
Memory Usage: 38.9 MB, less than 5.72% of JavaScript online submissions for Missing Number.
*/
/*
Intuition
A brute force method for solving this problem would be to simply check for the presence of each number that we expect to be present. The naive implementation might use a linear scan of the array to check for containment, but we can use a HashSet to get constant time containment queries and overall linear runtime.

Algorithm
This algorithm is almost identical to the brute force approach, except we first insert each element of nums into a set, allowing us to later query for containment in 0(1) time.
*/
/*
Time complexity : O(n)
Because the set allows for O(1) containment queries, the main loop runs in O(n) time. Creating numberSet costs O(n) time, as each set insertion runs in amortized O(1) time, so the overall runtime is O(n + n) = O(n).

Space complexity : O(n)
nums contains n−1 distinct elements, so it costs O(n) space to store a set containing all of them.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i, number;
    const numberSet = new Set();
    const l = nums.length;
    for (i = 0; i < l; i++) {
        numberSet.add(nums[i]);
    }
    for (number = 0; number < l+1; number++) {
        if (!numberSet.has(number)) {
            return number;
        }
    }
    return -1;
};
/*
Approach Bit Manipulation
Runtime: 52 ms, faster than 96.53% of JavaScript online submissions for Missing Number.
Memory Usage: 35.9 MB, less than 91.43% of JavaScript online submissions for Missing Number.
*/
/*
Intuition
We can harness the fact that XOR is its own inverse to find the missing element in linear time.

Algorithm
Because we know that nums contains nn numbers and that it is missing exactly one number on the range [0..n-1][0..n−1], we know that nn definitely replaces the missing number in nums. Therefore, if we initialize an integer to nn and XOR it with every index and value, we will be left with the missing number. Consider the following example (the values have been sorted for intuitive convenience, but need not be):
*/
/*
Time complexity : O(n)
Assuming that XOR is a constant-time operation, this algorithm does constant work on nn iterations, so the runtime is overall linear.

Space complexity : O(1)
This algorithm allocates only constant additional space.
*/
var missingNumber = function (nums) {
    let i, j;
    let sum = 0;
    const l = nums.length;
    for (i = 0; i <= l; i++) {
        sum ^= i;
    }
    for (j = 0; j < l; j++) {
        sum ^= nums[j];
    }
    return sum;
};
/*
Approach Gauss' Formula
Runtime: 56 ms, faster than 90.03% of JavaScript online submissions for Missing Number.
Memory Usage: 36 MB, less than 82.86% of JavaScript online submissions for Missing Number.
*/
/*
Time complexity : O(n)
Although Gauss' formula can be computed in O(1) time, summing nums costs us \mathcal{O}(n)O(n) time, so the algorithm is overall linear. Because we have no information about which number is missing, an adversary could always design an input for which any algorithm that examines fewer than nn numbers fails. Therefore, this solution is asymptotically optimal.

Space complexity : O(1)
This approach only pushes a few integers around, so it has constant memory usage.
*/
var missingNumber = function (nums) {
	let i, arraySum;
    let sum = 0;
    const l = nums.length;
    for (i = 0; i < l; i++) {
        sum += nums[i];
    }
    arraySum = ((l * (l + 1))) / 2;
    return arraySum - sum;
};
