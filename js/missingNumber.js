/* https://leetcode.com/problems/missing-number/ */

/*
Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.

Input: nums = [3, 0, 1]
Output: 2

Input: nums = [0, 1]
Output: 2

Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  const expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;
  for (let num of nums) actualSum += num;
  return expectedSum - actualSum;
};

// const missingNumber = nums => {
//     const set = new Set(nums);
//     for (let i = 0; i <= nums.length; i++) {
//         if (!set.has(i)) return i;
//     }
// };

// const missingNumber = nums => {
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i) return i;
//     }
//     return nums.length;
// };
