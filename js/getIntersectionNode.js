/* https://leetcode.com/problems/intersection-of-two-linked-lists/ */

/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Input: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
Output: Intersected at '8'


Input: listA = [1,9,1,2,4], listB = [3,2,4]
Output: Intersected at '2'


Input: listA = [2,6,4], listB = [1,5]
Output: No intersection
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeA;
};
// time - a + b
// space - 1

// const getIntersectionNode = (headA, headB) => {
//     let idxA = 0;
//     let nodeA = headA;
//     while (nodeA) {
//         idxA++;
//         nodeA = nodeA.next;
//     }

//     let idxB = 0;
//     let nodeB = headB;
//     while (nodeB) {
//         idxB++;
//         nodeB = nodeB.next;
//     }

//     let long = idxA >= idxB ? headA : headB;
//     let short = idxA < idxB ? headA : headB;

//     let diff = Math.abs(idxA - idxB);
//     while (diff > 0) {
//         long = long.next;
//         diff--;
//     }

//     while (long && short) {
//         if (long === short) return long;
//         long = long.next;
//         short = short.next;
//     }

//     return null;
// };
// time - a + b
// space - 1

// const getIntersectionNode = (headA, headB) => {
//     const set = new Set();
//     let nodeA = headA;
//     while (nodeA) {
//         set.add(nodeA);
//         nodeA = nodeA.next;
//     }

//     let nodeB = headB;
//     while (nodeB) {
//         if (set.has(nodeB)) return nodeB;
//         nodeB = nodeB.next;
//     }

//     return null;
// };
// time - a + b
// space - a