/*
Runtime: 64 ms, faster than 53.03% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Maximum Depth of Binary Tree.
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
 * @return {number}
 */
var maxDepth = function (root) {
    let depthLeft, depthRight;
    if (root === null) {
        return null;
    }
    depthLeft = maxDepth(root.left) + 1;
    depthRight = maxDepth(root.right) + 1;
    return depthLeft > depthRight ? depthLeft : depthRight;
};