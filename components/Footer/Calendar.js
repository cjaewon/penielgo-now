import styles from "./styles/Calendar.module.css";

export default function Calendar({ calendar }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>π« νκ΅ μΌμ </h3>
      <p className={styles.text}>
        { calendar.map(schedule => {
            if (schedule.bgnde !== schedule.endde) {
              return (
                <span key={schedule.schdulTitle}>β’ ({schedule.bgnde} ~ {schedule.endde})<br/> - {schedule.schdulTitle}<br/></span>
              );
            }

            return (
              <span key={schedule.schdulTitle}>β’ ({schedule.bgnde}) - {schedule.schdulTitle}<br/></span>
            );
          })
        }
      </p>
    </div>
  );
};