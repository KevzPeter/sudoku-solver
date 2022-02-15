import sanitizeInput from "../lib/sanitizeInput";
import styles from "../styles/Game.module.scss";
import isValid from "../lib/isValid";
import { useState } from "react";

const Square = (props) => {
  const [invalid, setInvalid] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const val = sanitizeInput(e);
    let newSquares = props.squares;
    let row = props.ridx;
    let col = props.cidx;
    if (val === -1 || !isValid(newSquares, row, col, val)) {
      setInvalid(true);
      props.setInvalid(true);
    } else {
      setInvalid(false);
      props.setInvalid(false);
      newSquares[props.ridx][props.cidx] = val;
      props.setSquares([...newSquares]);
    }
  };

  return (
    <>
      {!props.solved ? (
        <input
          className={styles["square"] + " " + styles[invalid ? "invalid" : undefined]}
          type="text"
          id="square-val"
          name="square-val"
          maxLength="1"
          inputMode="numeric"
          onChange={(e) => handleChange(e)}
        ></input>
      ) : (
        <div className={styles.square}>{props.val}</div>
      )}
    </>
  );
};

export default Square;
