const initSudoku = () => {
  let arr = new Array(9);
  for (let i = 0; i < 9; i++) {
    arr[i] = new Array(9).fill(0);
  }
  return arr;
};

export default initSudoku;
