import styles from "./styles/Weather.module.css";

export default function Weather({ weather }) {

  return (
    <div className={styles.container}>
      <h3 className={styles.date}>🌡️ 날씨</h3>

      {weather.map(day => {
        return (
          <>
            <b>{day[0]}</b> {day[1]}
            <hr/>
          </>
        )
      })}

    </div>
  );
}