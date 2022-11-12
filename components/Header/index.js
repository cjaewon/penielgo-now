import School from "./School";
import Counter from "./Counter";
import Forecast from "./Forecast";
import Description from "./Description";

import styles from "./styles/Header.module.css";

export default function Header({ count, forecast, generatedTime }) {
  return (
    <div>
      <div className={`${styles.row} ${styles.between}`}>
        <School />
        <div className={`${styles.row}`}>
          <Counter count={count} />
          <span className={styles.blank}></span>
          <Forecast forecast={forecast} />
        </div>
      </div>
      <div className={`${styles.row} ${styles.between}`}>
      <Description text="브니엘고 나우(NOW)는 브니엘고등학교 관련 정보를 제공하는 알림판입니다." />
        <Description text={`🔄 ${generatedTime}에 갱신됨 | 제작 최재원`} />
      </div>
    </div>

  );
}