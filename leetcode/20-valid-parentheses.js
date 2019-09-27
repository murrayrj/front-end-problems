/*
Runtime: 44 ms, faster than 98.62% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 33.8 MB, less than 91.67% of JavaScript online submissions for Valid Parentheses.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let i;
    const stack = [];
    const l = s.length;
    if (l === 0) {
        return true;
    }
    for (i = 0; i < l; i++) {
        const current = s.charAt(i);
        if (current === '[') {
            stack.push(']');
        } else if (current === '{') {
            stack.push('}');
        } else if (current === '(') {
            stack.push(')');
        } else if (stack.length === 0 || current !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};
/*
Runtime: 52 ms, faster than 82.80% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Valid Parentheses.
*/
var isValid = function (s) {
    let i;
    const stack = [];
    const hash = {'(': ')', '[': ']', '{': '}'};
    const l = s.length;
    if (l === 0) {
        return true;
    }
    for (i = 0; i < l; i++) {
        const current = s.charAt(i);
        if (hash[current] !== undefined) {
            stack.push(current);
        } else if (stack.length === 0 || current !== hash[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
};