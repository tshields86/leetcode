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

const isValidInputs = array => {
  const set = new Set();
  for (let input of array) {
    if (input !== '.') {
      if (set.has(input)) return false;
      else set.add(input);
    }
  }
  return true;
};

const isValidRowCol = board => {
  for (let i = 0; i < board.length; i++) {
    if (!isValidInputs(board[i])) return false;

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
          box.push(board[m + (i * 3)][n + (j * 3)]);
        }
      }
      if (!isValidInputs(box)) return false;
    }
  }
  return true;
};


const isValidSudoku = board => {
  if (!isValidRowCol(board) || !isValidBox(board)) return false;
  return true;
};