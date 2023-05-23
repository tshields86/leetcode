/* https://leetcode.com/problems/diameter-of-binary-tree/ */

/* 
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Input: root = [1, 2, 3, 4, 5]
Output: 3

Input: root = [1, 2]
Output: 1
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
 * @return {number}
 */
const diameterOfBinaryTree = root => {
  const longestPath = node => {
    if (node === null) return 0;
    const leftPath = longestPath(node.left);
    const rightPath = longestPath(node.right);
    diameter = Math.max(diameter, leftPath + rightPath);
    return Math.max(leftPath, rightPath) + 1;
  };

  let diameter = 0;
  longestPath(root);
  return diameter;
};
