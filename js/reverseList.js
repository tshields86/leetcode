/* https://leetcode.com/problems/reverse-linked-list/ */

/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
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
  const prev = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};
