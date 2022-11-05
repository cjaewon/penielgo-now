import styles from "./styles/Forecast.module.css";

export default function Forecast() {
  return (
    <div className={styles.container}>
      <div>
        <img 
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/cloud-with-rain_1f327-fe0f.png"
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h1 className={styles.title}>강풍을 동반한 비</h1>
        <p className={styles.description}>우산 깜빡하신거 아니시죠?</p>
      </div>
    </div>
  );
}