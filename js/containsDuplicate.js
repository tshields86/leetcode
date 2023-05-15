/* https://leetcode.com/problems/contains-duplicate/ */

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Hash Set - Early Exit
Time O(N) | Space O(N)
*/

const containsDuplicate = nums => {
  const unique = new Set();
  for (let num of nums) {
    if (unique.has(num)) return true;
    unique.add(num);
  }
  return false;
};
