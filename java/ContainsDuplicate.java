// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Brute force - Time: O(n^2), Space: O(1)
// HashSet - Time: O(n), Space: O(n)

class Solution {
  public boolean containsDuplicate(int[] nums) {
    Set<Integer> distinct = new HashSet<>();
    for (int num : nums) {
      if (distinct.contains(num)) {
        return true;
      }
      distinct.add(num);
    }

    return false;
  }
}