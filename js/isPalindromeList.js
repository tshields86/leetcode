/* https://leetcode.com/problems/palindrome-linked-list/ */

/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1, 2]
Output: false
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  const stack = [];
  let node = head;
  let fast = head;

  while (fast && fast.next) {
    stack.push(node.val);
    node = node.next;
    fast = fast.next.next;
  }

  if (fast !== null) node = node.next;

  while (node) {
    if (node.val !== stack.pop()) return false;
    node = node.next;
  }

  return true;
};
