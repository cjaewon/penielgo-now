import Corona from "./Corona";
import Clock from "./Clock";
import styles from "./styles/Footer.module.css";

export default function Footer({ corona }) {
  return (
    <div className={styles.container}>
      <Corona corona={corona} />
      <Clock />
    </div>
  );
}