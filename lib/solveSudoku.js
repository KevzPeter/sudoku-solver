function solveSudoku(board) {
  solve(board);
  return board;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let c = 1; c <= 9; c++) {
          //trial. Try 1 through 9
          if (isValid(board, i, j, c)) {
            board[i][j] = c; //Put c for this cell

            if (solve(board)) return true;
            //If it's the solution return true
            else board[i][j] = 0; //Otherwise go back
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == c) return false; //check row
    if (board[row][i] == c) return false; //check column
    if (board[3 * (row / 3) + i / 3][3 * (col / 3) + (i % 3)] == c) return false; //check 3*3 block
  }
  return true;
}

export default solveSudoku;
