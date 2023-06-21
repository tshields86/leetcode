/* https://leetcode.com/problems/single-number/ */

/*
Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2, 2, 1]
Output: 1

Input: nums = [4, 1, 2, 1, 2]
Output: 4

Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const set = new Set();

  for (let num of nums) {
    if (!set.has(num)) set.add(num);
    else set.delete(num);
  }

  return [...set.values()][0];
};
