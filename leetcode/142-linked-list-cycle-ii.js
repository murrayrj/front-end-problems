/*
Runtime: 64 ms, faster than 83.91% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 36.5 MB, less than 37.50% of JavaScript online submissions for Linked List Cycle II.
*/
/*
Floyd's cycle detection algorithm | Determining the starting point of cycle

Building upon the solution for Linked List Cycle and the two pointers approach, we can use Floyd's cycle-finding algorithm to find the start of the loop.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let oneStep = head;
    let twoStep = head;
    while (twoStep != null && twoStep.next != null) {
        oneStep = oneStep.next;
        twoStep = twoStep.next.next;      
        if (oneStep === twoStep) {
            return startLoop(oneStep, head)
        }
    }
    return null;
};
var startLoop = function (p, head) {
    let q = head;
    while (p != q) {
        p = p.next;
        q = q.next;
    }
    return p
}