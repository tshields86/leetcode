/* https://leetcode.com/problems/permutations/ */

/*
Given an array nums of distinct integers, return all the possible permutations.You can return the answer in any order.

Input: nums = [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

Input: nums = [0, 1]
Output: [[0, 1], [1, 0]]

Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const result = [];

  const backtrack = (curr = [], used = new Set()) => {
    if (curr.length === nums.length) return result.push([...curr]);
    for (let num of nums) {
      if (used.has(num)) continue;
      curr.push(num);
      used.add(num);
      backtrack(curr, used);
      curr.pop();
      used.delete(num);
    }
  };

  backtrack();

  return result;
};
