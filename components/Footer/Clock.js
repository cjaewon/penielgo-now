import { useEffect, useState } from "react";
import styles from "./styles/Clock.module.css";

export default function Clock({ }) {
  const [now, setNow] = useState(new Date());

  function refreshClock() {
    setNow(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 3000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>

      <p className={styles.text}>
        현재 시간 <br/> {now.getMonth() + 1}월 {now.getDate()}일 오후 {now.getHours()}시 {now.getMinutes()}분
      </p>
    </div>
  );
};