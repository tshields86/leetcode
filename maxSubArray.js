/* https://leetcode.com/problems/maximum-subarray/ */

/* 
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using
the divide and conquer approach, which is more subtle.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [0]
Output: 0

Input: nums = [-1]
Output: -1

Input: nums = [-2147483647]
Output: -2147483647
*/

/* 
[-2,1,-3,4,-1,2,1,-5,4]
                     ^
curr 5
max  6
*/

const maxSubArray = nums => {
  let curr = 0;
  let max = -Infinity;

  nums.forEach(num => {
    curr = Math.max(num, curr + num);
    max = Math.max(max, curr);
  });

  return max;
};
