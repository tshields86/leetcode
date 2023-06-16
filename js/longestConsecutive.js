/* https://leetcode.com/problems/longest-consecutive-sequence/ */

/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4

Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let [maxSeq, seq] = [1, 1];
  for (let i = 1; i < nums.length; i++) {
    const isPrevDuplicate = nums[i - 1] === nums[i]
    if (isPrevDuplicate) continue;

    const isStreak = nums[i] === ((nums[i - 1]) + 1)
    if (isStreak) seq++;
    else {
      maxSeq = Math.max(maxSeq, seq);
      seq = 1;
    }
  }

  return Math.max(maxSeq, seq);
};
