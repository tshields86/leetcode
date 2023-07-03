/* https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ */

/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Input: root = [3, 9, 20, null, null, 15, 7]
Output: [[3], [20, 9], [15, 7]]

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
const zigzagLevelOrder = root => {
  const result = [];
  const queue = new Queue();

  queue.enqueue([root, 0]);
  while (!queue.isEmpty()) {
    const [node, level] = queue.dequeue();
    if (!node) continue;

    const levelArray = result[level] || [];
    levelArray.push(node.val);
    result[level] = levelArray;

    queue.enqueue([node.left, level + 1]);
    queue.enqueue([node.right, level + 1]);
  }

  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) result[i].reverse();
  }

  return result;
};

// const zigzagLevelOrder = root => {
//   const result = [];
//   const queue = new Queue();

//   queue.enqueue([root, 0]);
//   while (!queue.isEmpty()) {
//     const [node, level] = queue.dequeue();
//     if (!node) continue;

//     const levelArray = result[level] || [];
//     const method = level % 2 === 0 ? 'push' : 'unshift';
//     levelArray[method](node.val);
//     result[level] = levelArray;

//     queue.enqueue([node.left, level + 1]);
//     queue.enqueue([node.right, level + 1]);
//   }

//   return result;
// };
