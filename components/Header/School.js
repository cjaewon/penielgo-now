import styles from "./styles/School.module.css";

export default function School() {
  return (
    <div className={styles.container}>
      <div>
        <img 
          src="/logo.png"
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>브니엘고 라이브</h2>
        <p className={styles.description}>부산광역시 금정구 체육공원로 154</p>
      </div>
    </div>
  )
}