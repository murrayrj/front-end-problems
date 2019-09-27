/*
Approach 1: Recursion
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
/*
Approach 2: Iteration
Runtime: 60 ms, faster than 76.67% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 37.1 MB, less than 50.00% of JavaScript online submissions for Maximum Depth of Binary Tree.
*/
var maxDepth = function (root) {
    let nextNodes, currentDepth;
    let level = 1;
    let stack = [root];
    if (!root) {
        return 0;
    }
    while (stack.length > 0) {
        nextNodes = [];
        currentDepth = stack.length;
        while (currentDepth > 0) {
            const currentNode = stack.pop();
            currentDepth--;
            if (currentNode.left) {
                nextNodes.push(currentNode.left);
            }
            if (currentNode.right) {
                nextNodes.push(currentNode.right);
            }
        }
        if (nextNodes.length) {
            level++;
        }
        stack = nextNodes;
    }
    return level;
};