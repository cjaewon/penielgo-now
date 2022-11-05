import styles from "./styles/Counter.module.css";

export default function Counter() {
  return (
    <div className={styles.container}>
      <div>
        <img 
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/tear-off-calendar_1f4c6.png"
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h1 className={styles.title}>D-27</h1>
        <p className={styles.description}>대학수학능력시험</p>
      </div>
    </div>
  );
}