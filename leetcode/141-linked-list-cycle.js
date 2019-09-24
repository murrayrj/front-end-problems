/*
Runtime: 64 ms, faster than 78.81% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 36.5 MB, less than 93.75% of JavaScript online submissions for Linked List Cycle.
*/
/*
Two Pointers Approach

Intuition
Imagine two runners running on a track at different speed. What happens when the track is actually a circle?

Algorithm
The space complexity can be reduced to O(1)O(1) by considering two pointers at different speed - a slow pointer and a fast pointer. The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
If there is no cycle in the list, the fast pointer will eventually reach the end and we can return false in this case.
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    let oneStepPointer = head;
    let twoStepPointer = head;
    while (twoStepPointer != null && twoStepPointer.next != null) {
        oneStepPointer = oneStepPointer.next;
        twoStepPointer = twoStepPointer.next.next;      
        if (oneStepPointer === twoStepPointer) {
            return true;
        }
    }
    return false;
};
