/* https://leetcode.com/problems/validate-binary-search-tree/ */

const isValidBST = (node, min = -Infinity, max = Infinity) => !node
  ? true 
  : node.val > min && node.val < max 
    && isValidBST(node.left, min, node.val) 
    && isValidBST(node.right, node.val, max);