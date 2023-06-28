/* https://leetcode.com/problems/pascals-triangle/ */

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

Input: numRows = 1
Output: [[1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    const prevRow = triangle[i - 1];
    for (let j = 0; j < i + 1; j++) {
      const topLeft = prevRow[j - 1] || 0;
      const topRight = prevRow[j] || 0;
      row.push(topLeft + topRight);
    }
    triangle.push(row);
  }

  return triangle;
};
