/* https://leetcode.com/problems/kth-largest-element-in-an-array/ */

/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  let minVal = Infinity;

  for (let num of nums) {
    minVal = Math.min(minVal, num);
  }

  const count = [];
  for (let num of nums) {
    count[num - minVal] = (count[num - minVal] || 0) + 1;
  }

  let remain = k;
  for (let num = count.length - 1; num >= 0; num--) {
    remain -= count[num] || 0;
    if (remain <= 0) {
      return num + minVal;
    }
  }

  return -1;
};
