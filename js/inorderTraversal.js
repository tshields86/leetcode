/* https://leetcode.com/problems/binary-tree-inorder-traversal/ */

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Input: root = [1, null, 2, 3]
Output: [1, 3, 2]

Input: root = []
Output: []

Input: root = [1]
Output: [1]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative w/ Stack
const inorderTraversal = root => {
  const result = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
};

// Recursive
// const inorderTraversal = (node, result = []) => {
//     if (!node) return result;
//     inorderTraversal(node.left, result);
//     result.push(node.val);
//     inorderTraversal(node.right, result);
//     return result;
// };
