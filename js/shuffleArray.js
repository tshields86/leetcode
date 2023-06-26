/* https://leetcode.com/problems/shuffle-an-array/ */

/*
Given an integer array nums, design an algorithm to randomly shuffle the array.All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
*/

class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.array = [...nums];
    this.original = nums;
  }
  /**
   * @return {number[]}
   */
  shuffle() {
    for (let i = 0; i < this.array.length; i++) {
      const rand = Math.floor(Math.random() * this.array.length);
      const temp = this.array[i];
      this.array[i] = this.array[rand];
      this.array[rand] = temp;
    }
    return this.array;
  }
  /**
   * @return {number[]}
   */
  reset() {
    this.array = [...this.original];
    return this.array;
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
