import MealCard from "./MealCard";
import styles from "./styles/Center.module.css";
import Weather from "./Weather";

export default function Center({ meals, weather }) {
  const today = new Date();

  return (
    <div className={styles.container}>
      <Weather weather={weather} />
      {  
        meals
          .slice(today.getDate() - 1, today.getDate() + 1) // + 6
          .map(([date, meal], i) => {
            if (i === 0) return (<MealCard key={date} date="오늘 급식" meal={meal} />);
            else if (i === 1) return (<MealCard key={date} date="내일 급식" meal={meal} />);

            const mealDate = new Date();
            mealDate.setDate(today.getDate() + i);

            const day = ['일', '월', '화', '수', '목', '금', '토'][mealDate.getDay()];

            return (<MealCard key={date} date={date + ` (${day})`} meal={meal} />)
          })
      }
    </div>
  );
};