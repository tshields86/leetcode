/* https://leetcode.com/problems/delete-node-in-a-linked-list/ */

/*
There is a singly - linked list head and we want to delete a node node in it.

You are given the node to be deleted node.You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node.Note that by deleting the node, we do not mean removing it from memory.We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]

Input: head = [4, 5, 1, 9], node = 1
Output: [4, 5, 9]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
  const nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
  nextNode.next = null;
};
