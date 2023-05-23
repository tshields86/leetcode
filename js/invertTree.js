/* https://leetcode.com/problems/invert-binary-tree/ */

/*
Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4, 2, 7, 1, 3, 6, 9]
Output: [4, 7, 2, 9, 6, 3, 1]

Input: root = [2, 1, 3]
Output: [2, 3, 1]

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
 * @param {TreeNode} node
 * @return {TreeNode}
 */
const invertTree = node => {
    if (node === null) return node;
    const left = invertTree(node.left);
    const right = invertTree(node.right);

    node.left = right;
    node.right = left;

    return node;
};
