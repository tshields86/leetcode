/* https://leetcode.com/problems/subsets/ */

/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const result = [];
  let size = 0;

  const backtrack = (first, curr = []) => {
    if (curr.length === size) return result.push([...curr]);

    for (let i = first; i < nums.length; i++) {
      const num = nums[i];
      curr.push(num);
      backtrack(i + 1, curr);
      curr.pop();
    }
  };

  while (size <= nums.length) {
    backtrack(0);
    size++;
  }

  return result;
};
