/* https://leetcode.com/problems/maximum-subarray/ */

/* 
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let curSubArr = 0;
  let maxSubArr = -Infinity;
  for (let num of nums) {
    curSubArr = Math.max(num, curSubArr + num);
    maxSubArr = Math.max(maxSubArr, curSubArr);
  }
  return maxSubArr;
};
