import styles from "./styles/MealCard.module.css";

export default function MealCard({ date, meal }) {


  return (
    <div className={styles.container}>
      <h3>{date}</h3>
      <p className={styles.text}>
        {meal}
      </p>
    </div>
  );
}