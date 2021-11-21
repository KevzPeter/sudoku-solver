import styles from "../styles/Game.module.scss";
import solveSudoku from "../lib/solveSudoku";
import initSudoku from "../lib/initSudoku";
import Timer from "./Timer";
import { useState } from "react";

const Solve = (props) => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleClick = (choice) => {
    if (choice === "solve") {
      setStart(Math.floor(Date.now()));
      let solvedSquares = solveSudoku(props.squares);
      props.setSquares(solvedSquares);
      props.setSolved(true);
      setEnd(Math.floor(Date.now()));
    } else {
      setStart(null);
      setEnd(null);
      props.setSquares(initSudoku);
      props.setSolved(false);
    }
  };

  return (
    <>
      <div className={styles.solve}>
        <button
          id={styles.solvebtn}
          disabled={props.solved}
          onClick={() => {
            handleClick("solve");
          }}
        >
          Sudo Solve 🤠
        </button>
        <button
          id={styles.resetbtn}
          onClick={() => {
            handleClick("reset");
          }}
        >
          Reset Board 🔄
        </button>
      </div>
      <Timer {...{ start, end }} />
    </>
  );
};

export default Solve;
