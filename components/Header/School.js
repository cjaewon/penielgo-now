import styles from "./styles/School.module.css";

export default function School() {
  return (
    <div className={styles.container}>
      <div>
        <img 
          src={`${process.env.assetPrefix}/logo.png`}
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>브니엘고 나우</h2>
      </div>
    </div>
  )
}