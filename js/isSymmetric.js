/* https://leetcode.com/problems/symmetric-tree/ */

/*
Given the root of a binary tree, check whether it is a mirror of itself(i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1, 2, 2, null, 3, null, 3]
Output: false
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
 * @return {boolean}
 */
const isSymmetric = root => {
  const leftStack = [root.left];
  const rightStack = [root.right];

  while (leftStack.length || rightStack.length) {
    const leftNode = leftStack.pop();
    const rightNode = rightStack.pop();
    if (!leftNode && !rightNode) continue;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;

    leftStack.push(leftNode.left, leftNode.right);
    rightStack.push(rightNode.right, rightNode.left);
  }

  return true;
};
