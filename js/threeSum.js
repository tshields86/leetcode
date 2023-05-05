/* https://leetcode.com/problems/3sum/ */

/* 
Given an array nums of n integers, are there elements a, b, c
in nums such that a + b + c = 0? Find all unique triplets in
the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = []
Output: []

Input: nums = [0]
Output: []
*/

const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1;
    let end = len - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
      }

      if (sum < 0) {
        while (nums[start] === nums[start + 1] && start < end) start++
        start++;
      } else {
        while (nums[end] === nums[end - 1] && start < end) end--;
        end--;
      }
    }
  }

  return result;
};