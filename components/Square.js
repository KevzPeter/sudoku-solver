import styles from "../styles/Game.module.scss";

const Square = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    let newSquares = props.squares;
    newSquares[props.ridx][props.cidx] = e.target.valueAsNumber;
    props.setSquares([...newSquares]);
  };

  return (
    <>
      {!props.solved ? (
        <input className={styles.square} type="number" id="square-val" name="square-val" min="1" max="9" onChange={(e) => handleChange(e)}></input>
      ) : (
        <div className={styles.square}>{props.val}</div>
      )}
    </>
  );
};

export default Square;
