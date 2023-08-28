import sanitizeInput from "../lib/sanitizeInput";
import styles from "../styles/Game.module.scss";
import isValid from "../lib/isValid";
import { useState } from "react";
import toast from 'react-hot-toast';

const Square = (props) => {
  const [invalid, setInvalid] = useState(false);

  const showInvalidInputToast = () => toast.error('Invalid input', { position: 'top-right' });

  const handleChange = (e) => {
    e.preventDefault();
    if (!e.target.value?.length) {
      setInvalid(false);
      props.setInvalid(false);
      return;
    }
    const val = sanitizeInput(e);
    let newSquares = props.squares;
    let row = props.rowIdx;
    let col = props.colIdx;
    if (val === -1 || !isValid(newSquares, row, col, val)) {
      showInvalidInputToast();
      setInvalid(true);
      props.setInvalid(true);
    } else {
      setInvalid(false);
      props.setInvalid(false);
      newSquares[props.rowIdx][props.colIdx] = val;
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
