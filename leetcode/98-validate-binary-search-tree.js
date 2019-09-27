/*
Approach 1: Recursion
Runtime: 56 ms, faster than 96.21% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 39.3 MB, less than 43.59% of JavaScript online submissions for Validate Binary Search Tree.
*/
/*
The idea above could be implemented as a recursion. One compares the node value with its upper and lower limits if they are available.
Then one repeats the same step recursively for left and right subtrees.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let rootValue, left, right;
    const lower = arguments[1] === undefined ? Number.MIN_SAFE_INTEGER : arguments[1];
    const upper = arguments[2] === undefined ? Number.MAX_SAFE_INTEGE : arguments[2];
    if (!root) {
        return true;
    }
    rootValue = root.val;
    if (rootValue <= lower || rootValue >= upper) {
        return false;
    }
    right = isValidBST(root.right, rootValue, upper);
    left = isValidBST(root.left, lower, rootValue);
    return left && right;
};
/*
Time complexity : O(N) since we visit each node exactly once.
Space complexity : O(N) since we keep up to the entire tree.
*/
/*
Approach 2: Iteration
Runtime: 60 ms, faster than 88.31% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 38.1 MB, less than 46.15% of JavaScript online submissions for Validate Binary Search Tree.
*/
/*
The above recursion could be converted into iteration, with the help of stack. DFS would be better than BFS since it works faster here.
*/
var isValidBST = function (root) {
    let rootValue, lower, upper;
    const stack = [[root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
    if (!root) {
        return true;
    }
    while (stack.length > 0) {
        [root, lower, upper] = stack.pop();
        if (!root) {
            continue;
        }
        rootValue = root.val;
        if (rootValue <= lower || rootValue >= upper) {
            return false;
        }
        stack.push([root.right, rootValue, upper]);
        stack.push([root.left, lower, rootValue]);
    }
    return true;
};