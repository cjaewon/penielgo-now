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
    <div className={styles.container} style={{ backgroundImage: `url("${process.env.assetPrefix}/clock-background.jpeg");` }}>

      <p className={styles.text}>
        현재 시간 <br/> {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDate()}일 오후 {now.getHours()}시 {now.getMinutes()}분
      </p>
    </div>
  );
};