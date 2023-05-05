/* https://leetcode.com/problems/reverse-linked-list/ */

/* 
Reverse a singly linked list.

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

const reverseList = head => {
  let prev = null;
  let node = head;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

const reverseListRecursive = head => {
  if (head === null || head.next === null) return head;
  const prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};