import School from "./School";
import Counter from "./Counter";
import styles from "./styles/Header.module.css";
import Forecast from "./Forecast";

export default function Header({ count, forecast }) {
  return (
    <div className={styles.container}>
      <School />
      <div className={styles.row}>
        <Counter count={count} />
        <span className={styles.blank}></span>
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
}