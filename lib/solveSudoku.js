function solveSudoku(squares) {
  solve(squares);
  return squares;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
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
    var new_row = 3 * ((row / 3) | 0) + ((i / 3) | 0);
    var new_col = 3 * ((col / 3) | 0) + (i % 3);
    if (board[new_row][new_col] == c) return false; //check 3*3 block
  }
  return true;
}

export default solveSudoku;
