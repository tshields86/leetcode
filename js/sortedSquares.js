/* https://leetcode.com/problems/squares-of-a-sorted-array/ */

/* 
Given an array of integers A sorted in non-decreasing order, return an array of
the squares of each number, also in sorted non-decreasing order.

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

const sortedSquares = array => {
  const result = new Array(array.length);
  let left = 0;
  let right = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) >= Math.abs(array[right])) {
      result[i] = Math.pow(array[left++], 2);
    } else {
      result[i] = Math.pow(array[right--], 2);
    }
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [ 0, 1, 9, 16, 100 ]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [ 4, 9, 9, 49, 121 ]
