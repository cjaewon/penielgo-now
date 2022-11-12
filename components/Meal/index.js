import MealCard from "./MealCard";
import styles from "./styles/Meal.module.css";
import TitleCard from "./TitleCard";

export default function Meal({ meals }) {
  const today = new Date();

  today.getDate();
  console.log(meals);

  return (
    <div className={styles.container}>
      <TitleCard />
      {  
        meals.slice(today.getDate() - 1, today.getDate() + 6).map(([date, meal]) => <MealCard date={date} meal={meal} />)
      }
    </div>
  );
};