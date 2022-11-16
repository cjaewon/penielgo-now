import styles from "./styles/Counter.module.css";

export default function Counter({ count }) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url("${process.env.assetPrefix}/counter-background.jpeg");` }}>
      <div>
        <img 
          src={`${process.env.assetPrefix}/emoji/calendar.png`}
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h1 className={styles.title}>D-{count}</h1>
        <p className={styles.description}>대학수학능력시험</p>
      </div>
    </div>
  );
}