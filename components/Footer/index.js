import Corona from "./Corona";
import Clock from "./Clock";
import Board from "./Board";
import styles from "./styles/Footer.module.css";
import Calendar from "./Calendar";

export default function Footer({ corona, board, calendar }) {
  return (
    <div className={styles.container}>
      <Calendar calendar={calendar} />
      <Corona corona={corona} />
      <Clock />
      <Board board={board} />
    </div>
  );
}