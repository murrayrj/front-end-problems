/*
Approach: HashMap
Runtime: 68 ms, faster than 79.97% of JavaScript online submissions for Valid Anagram.
Memory Usage: 36 MB, less than 77.55% of JavaScript online submissions for Valid Anagram
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let i, j;
    const map = {};
    const stringLength = s.length;
    if (stringLength !== t.length) {
        return false;
    }
    for (i = 0; i < stringLength; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    for (j = 0; j < stringLength; j++) {
        if (map[t[j]]) {
            map[t[j]]--;
        } else {
            return false;
        }
    }
    return true;
};