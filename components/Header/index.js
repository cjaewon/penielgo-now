import School from "./School";
import Counter from "./Counter";
import styles from "./styles/Header.module.css";
import Forecast from "./Forecast";

export default function Header() {
  return (
    <div className={styles.container}>
      <School />
      <div className={styles.row}>
        <Counter />
        <span className={styles.blank}></span>
        <Forecast />
      </div>
    </div>
  )
}