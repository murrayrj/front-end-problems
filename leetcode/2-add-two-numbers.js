/*
Runtime: 112 ms, faster than 74.50% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 38.4 MB, less than 65.28% of JavaScript online submissions for Add Two Numbers.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let carry = 0;
    const sumList = new ListNode(0);
    let sumResults = sumList;
    while (p1 != null || p2 != null) {
        let sum = carry;
        if (p1 != null) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2 != null) {
            sum += p2.val;
            p2 = p2.next;
        }
        carry = sum > 9 ? 1 : 0;
        sumResults.next = new ListNode(sum % 10);
        sumResults = sumResults.next;
    }
    if (carry > 0) {
        const carryOver = new ListNode(carry);
        sumResults.next = carryOver;
    }
    return sumList.next;
};