import styles from "./styles/MealCard.module.css";

export default function MealCard({ date, meal }) {
  const [lunch, dinner] = meal.replace("[석식]\n", "").replace("[중식]\n", "").split("\n\n");
  const isMealToday = meal.includes("급식이 없습니다.");

  return (
    <div className={styles.container}>
      <h3 className={styles.date}>{date}</h3>
      { !isMealToday ? 
          <div className={styles.meal_container}>
            <p className={styles.text}>
              [중식]<br/>
              <div className={styles.break}></div>
              {lunch}
            </p>
            <p className={styles.text}>
              [석식]<br/>
              <div className={styles.break}></div>
              {dinner}
            </p>
          </div>
        :
          <div className={styles.meal_container}>
            <p className={styles.text}>
              {meal}
            </p>
          </div>
      }
    </div>
  );
}