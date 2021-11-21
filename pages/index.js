import Head from "next/head";
import Game from "../components/Game";
import styles from "../styles/Game.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku Solver @kevzpeter</title>
        <meta name="description" content="Sudoku Solver" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </div>
  );
}
