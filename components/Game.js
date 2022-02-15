import styles from "../styles/Game.module.scss";
import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import Solve from "./Solve";
import initSudoku from "../lib/initSudoku";

const Game = () => {
  const [invalid, setInvalid] = useState(false);
  const [squares, setSquares] = useState(initSudoku());
  const [solved, setSolved] = useState(false);

  return (
    <div className={styles.game}>
      <h1>Sudoku Solver</h1>
      <Board {...{ solved }}>
        {squares.map((row, ridx) => row.map((el, cidx) => <Square key={ridx * 9 + cidx} val={el} {...{ ridx, cidx, setSquares, squares, solved, invalid, setInvalid }} />))}
      </Board>
      <Solve {...{ squares, setSquares, setSolved, solved, invalid }} />
    </div>
  );
};

export default Game;
