import styles from "../styles/Game.module.scss";

const Square = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    let newSquares = props.squares;
    props.squares[props.ridx][props.cidx] = e.target.valueAsNumber;
    props.setSquares([...newSquares]);
  };

  return <input className={styles.square} type="number" id="square-val" name="square-val" min="1" max="9" onChange={(e) => handleChange(e)}></input>;
};

export default Square;
