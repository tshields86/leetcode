/* https://leetcode.com/problems/product-of-array-except-self/ */

/* 
Given an array nums of n integers where n > 1,
return an array output such that output[i] is
equal to the product of all the elements of nums
except nums[i].

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the
elements of any prefix or suffix of the array (including
the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity?
(The output array does not count as extra space for
the purpose of space complexity analysis.)
*/

const productExceptSelf = nums => {
  const productExceptIndex = [];

  for (let i = 0, productSoFar = 1; i < nums.length; i++) {
    productExceptIndex[i] = productSoFar;
    productSoFar *= nums[i];
  }

  for (let i = nums.length - 1, productSoFar = 1; i >= 0; i--) {
    productExceptIndex[i] *= productSoFar;
    productSoFar *= nums[i];
  }

  return productExceptIndex;
};
