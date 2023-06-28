https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/*
Given a 1 - indexed array of integers numbers that is already sorted in non - decreasing order, find two numbers such that they add up to a specific target number.Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array[index1, index2] of length 2.

The tests are generated such that there is exactly one solution.You may not use the same element twice.

Your solution must use only constant extra space.

Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]

Input: numbers = [2, 3, 4], target = 6
Output: [1, 3]

Input: numbers = [-1, 0], target = -1
Output: [1, 2]
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum < target) low++;
    else high--;
  }
  return [-1, -1];
};
