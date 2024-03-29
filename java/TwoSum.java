// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> lookup = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      int compliment = target - nums[i];
      if (lookup.containsKey(compliment)) {
        return new int[] { i, lookup.get(compliment) };
      }
      lookup.put(nums[i], i);
    }
    return new int[] { };
  }
}
