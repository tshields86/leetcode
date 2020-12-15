/* https://leetcode.com/problems/longest-increasing-subsequence/ */

/* 

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements
without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence
of the array [0,3,1,6,2,2,7].

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Input: nums = [0,1,0,3,2,3]
Output: 4

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

/* 
Dynamic programming

Time: O(n^2)
Space: O(n)
*/

const lengthOfLIS = nums => {
  if (!nums.length) return 0;

  const dp = [];
  dp[0] = 1;
  let maxResult = 1;

  for (let i = 1; i < nums.length; i++) {
    let maxValue = 0;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxValue = Math.max(maxValue, dp[j]);
      }
    }
    dp[i] = maxValue + 1;
    maxResult = Math.max(maxResult, dp[i]);
  }

  return maxResult;
};