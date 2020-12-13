/* https://leetcode.com/problems/maximal-square/ */

/* 
Given an m x n binary matrix filled with 0's and 1's,
find the largest square containing only 1's and return its area.

Input: matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 4

Input: matrix = [
  ["0","1"],
  ["1","0"]
]
Output: 1

Input: matrix = [
  ["0"]
]
Output: 0

1) create cache matrix to keep track of neighboring squares and current depth
2) keep track of max size
3) iterate over matrix
  - if i = 0 the area above is 0
  - if j = 0 the area to the left is 0
  - else compunt the min of the above, left, and diagonal
4) return the square of the max size

time O(mn)
space O(mn)
*/

const maximalSquare = matrix => {
  const sizes = Array.from({ length: matrix.length }, () => {
    return new Array(matrix[0].length).fill(0);
  });

  let maxSize = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const current = Number(matrix[i][j]);
      if (current === 0) continue;

      if (i === 0 || j === 0) sizes[i][j] = current;
      else {
        const neighbors = Math.min(
          sizes[i - 1][j],
          sizes[i][j - 1],
          sizes[i - 1][j - 1]
        );
        sizes[i][j] = neighbors + current;
      }

      maxSize = Math.max(maxSize, sizes[i][j]);
    }
  }

  return Math.pow(maxSize, 2);
};