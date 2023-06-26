/* https://leetcode.com/problems/binary-tree-level-order-traversal/ */

/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3, 9, 20, null, null, 15, 7]
Output: [[3], [9, 20], [15, 7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
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
 * @return {number[][]}
 */
const levelOrder = root => {
  const result = [];
  if (!root) return result;

  const queue = new Queue();
  queue.enqueue(root);
  let level = 0;

  while (!queue.isEmpty()) {
    result.push([]);
    const levelLen = queue.size();
    console.log({ levelLen })
    for (let i = 0; i < levelLen; i++) {
      const node = queue.dequeue();
      result[level].push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    level++;
  }

  return result;
};
