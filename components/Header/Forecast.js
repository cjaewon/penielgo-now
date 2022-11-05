import styles from "./styles/Forecast.module.css";

export default function Forecast({ forecast }) {
  return (
    <div className={styles.container}>
      <div>
        <img 
          src="https://emojis.wiki/emoji-pics-lf/twitter/globe-showing-americas-twitter.png"
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h1 className={styles.title}>{forecast.weather} {forecast.temperature}</h1>
        <p className={styles.description}>{forecast.comment}</p>
      </div>
    </div>
  );
}

