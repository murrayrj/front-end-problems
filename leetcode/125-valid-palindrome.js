/*
Runtime: 64 ms, faster than 89.77% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 36.9 MB, less than 91.30% of JavaScript online submissions for Valid Palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i;
    const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = clean.length;
    const midpoint = Math.floor(length / 2);
    for (i = 0; i < midpoint; i++) {
        if (clean.charAt(i) !== clean.charAt(length - i - 1)) {
            return false;
        }
    }
    return true;
};
