/* https://leetcode.com/problems/intersection-of-two-arrays-ii/ */

/*
Given two integer arrays nums1 and nums2, return an array of their intersection.Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
Output: [2, 2]

Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
Output: [4, 9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = [];
  const countMap = new Map();

  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    const count = (countMap.get(num) || 0);
    if (count > 0) {
      result.push(num);
      countMap.set(num, count - 1);
    }
  }

  return result;
};
