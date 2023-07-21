/* https://leetcode.com/problems/word-search/ */

/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.The same letter cell may not be used more than once.

Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
Output: true

Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE"
Output: true

Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
Output: false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const backtrack = (row, col, idx) => {
    if (board[row][col] !== word[idx]) return false;
    if (idx === word.length - 1) return true;

    board[row][col] = '*';
    for (let [dx, dy] of dirs) {
      const x = row + dx;
      const y = col + dy;
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        if (backtrack(x, y, idx + 1)) return true;
      }
    }
    board[row][col] = word[idx];
    return false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (backtrack(row, col, 0)) return true;
    }
  }

  return false;
};
