import styles from "../styles/Game.module.scss";
import solveSudoku from "../lib/solveSudoku";
import initSudoku from "../lib/initSudoku";

const Solve = (props) => {
  const handleClick = (choice) => {
    if (choice === "solve") {
      let solvedSquares = solveSudoku(props.squares);
      props.setSquares(solvedSquares);
      props.setSolved(true);
    } else {
      props.setSquares(initSudoku);
      props.setSolved(false);
    }
  };

  return (
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
  );
};

export default Solve;
