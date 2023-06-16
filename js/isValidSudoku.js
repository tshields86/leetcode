/* https://leetcode.com/problems/valid-sudoku/ */

/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need
to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

const isValidInputs = arr => {
  const set = new Set();
  for (let item of arr) {
    if (item === '.') continue;
    else if (set.has(item)) return false;
    else set.add(item);
  }

  return true;
}

const isValidRowCol = board => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (!isValidInputs(row)) return false;

    const col = [];
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i]);
    }
    if (!isValidInputs(col)) return false;
  }

  return true;
};

const isValidBox = board => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const box = [];
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          box.push(board[(i * 3) + m][(j * 3) + n]);
        }
      }
      if (!isValidInputs(box)) return false;
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = board => {
  return isValidRowCol(board) && isValidBox(board);
};