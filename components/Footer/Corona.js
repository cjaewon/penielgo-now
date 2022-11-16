import styles from "./styles/Corona.module.css";

export default function Corona({ corona }) {
  const date = new Date();
  const text = `확진환자: ${corona.recently_confirmed_acc.toLocaleString()}명 (🔺 ${corona.recently_confirmed.toLocaleString()}명)
격리해제: ${corona.recently_released_acc.toLocaleString()}명 (🔺 ${corona.recently_released.toLocaleString()}명)
사망자: ${corona.recently_death_acc.toLocaleString()}명 (🔺 ${corona.recently_death.toLocaleString()}명)
검사진행: ${corona.recently_testing.toLocaleString()}명 (${corona.recently_testing_increase > 0 ? `🔺 ${corona.recently_testing_increase.toLocaleString()}` : `🔻 ${(-data.recently_testing_increase).toLocaleString()}`}명)
  
📮 ${date.getMonth() + 1}월 ${date.getDate()}일 기준 
(질병관리청 보도자료 사용)`;


  return (
    <div className={styles.container} style={{ backgroundImage: `url("${process.env.assetPrefix}/corona-background.jpeg");` }}>
      <h3 className={styles.title}>📢 코로나바이러스-19 감염증 현황</h3>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
};