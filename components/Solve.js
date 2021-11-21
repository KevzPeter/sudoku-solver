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
      <div
        id={styles.solvebtn}
        onClick={() => {
          handleClick("solve");
        }}
      >
        Sudo Solve 🤠
      </div>
      <div
        id={styles.resetbtn}
        onClick={() => {
          handleClick("reset");
        }}
      >
        Reset Board 🔄
      </div>
    </div>
  );
};

export default Solve;
