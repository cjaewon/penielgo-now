import Corona from "./Corona";
import Clock from "./Clock";
import Board from "./Board";
import styles from "./styles/Footer.module.css";

export default function Footer({ corona, board }) {
  return (
    <div className={styles.container}>
      <Corona corona={corona} />
      <Clock />
      <Board board={board} />
    </div>
  );
}