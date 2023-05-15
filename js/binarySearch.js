/* https://leetcode.com/problems/binary-search/ */

/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
startIdx 0
endIdx 5
midIdx = 2
Output: 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (nums[midIdx] === target) return midIdx;
    else if (nums[midIdx] < target) startIdx = midIdx + 1;
    else endIdx = midIdx - 1;
  }

  return -1;
};