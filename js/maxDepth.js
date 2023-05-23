/* https://leetcode.com/problems/maximum-depth-of-binary-tree/ */

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3

Input: root = [1, null, 2]
Output: 2
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
 * @param {TreeNode} node
 * @return {number}
 */
const maxDepth = node => {
  if (node === null) return 0;
  const left = maxDepth(node.left);
  const right = maxDepth(node.right);

  return Math.max(left, right) + 1;
};
