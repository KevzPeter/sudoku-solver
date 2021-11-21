import styles from "../styles/Game.module.scss";
const Board = (props) => {
  return <div className={styles["board"] + " " + styles[props.solved ? "rgb" : null]} {...props} />;
};

export default Board;
