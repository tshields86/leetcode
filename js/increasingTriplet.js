/* https://leetcode.com/problems/increasing-triplet-subsequence/ */

/*
Given an integer array nums, return true if there exists a triple of indices(i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].If no such indices exists, return false.

Input: nums = [1, 2, 3, 4, 5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Input: nums = [5, 4, 3, 2, 1]
Output: false
Explanation: No triplet exists.

Input: nums = [2, 1, 5, 0, 4, 6]
Output: true
Explanation: The triplet(3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = nums => {
  let first = Infinity;
  let second = Infinity;
  for (let num of nums) {
    if (num <= first) first = num;
    else if (num <= second) second = num;
    else return true;
  }
  return false;
};
