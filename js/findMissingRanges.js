/* https://leetcode.com/problems/missing-ranges/ */

/*
You are given an inclusive range[lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range[lower, upper] and x is not in nums.

Return the shortest sorted list of ranges that exactly covers all the missing numbers.That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

Input: nums = [0, 1, 3, 50, 75], lower = 0, upper = 99
Output: [[2, 2], [4, 49], [51, 74], [76, 99]]

Input: nums = [-1], lower = -1, upper = -1
Output: []
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
const findMissingRanges = (nums, lower, upper) => {
  const result = [];
  const len = nums.length;
  if (len === 0) {
    result.push([lower, upper]);
    return result;
  }
  if (lower < nums[0]) {
    result.push([lower, nums[0] - 1]);
  }

  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) continue;
    result.push([nums[i] + 1, nums[i + 1] - 1]);
  }

  if (upper > nums[len - 1]) {
    result.push([nums[len - 1] + 1, upper]);
  }

  return result;
};
