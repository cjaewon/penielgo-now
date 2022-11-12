import School from "./School";
import Counter from "./Counter";
import Forecast from "./Forecast";
import styles from "./styles/Header.module.css";

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