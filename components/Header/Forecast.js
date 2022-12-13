import styles from "./styles/Calendar.module.css";

export default function Calendar({ calendar }) {
  const weatherEmojiMap = {
    "맑음": "/emoji/sun.png",
    "구름조금": "/emoji/cloud.png",
    "구름많음": "/emoji/cloud.png",
    "흐림": "/emoji/cloud.png",
    "약한비": "/emoji/rain.png",
    "비": "/emoji/rain.png",
    "강한비": "/emoji/rain.png",
    "약한눈": "/emoji/snow.png",
    "눈": "/emoji/snow.png",
    "강한눈": "/emoji/snow.png",
    "진눈깨비": "/emoji/snow.png",
    "소나기": "/emoji/cloud-with-lightning-and-rain.png",
    "소낙눈": "/emoji/snow.png",
    "안개": "/emoji/foggy.png",
    "번개, 뇌우": "/emoji/cloud-with-lightning-and-rain.png",
    "우박": "/emoji/snow.png",
    "황사": "/emoji/dust.png",
    "가끔 비": "/emoji/rain.png",
    "비 또는 눈": "/emoji/snow.png",
    "가끔 비, 눈": "/emoji/snow.png",
    "가끔 눈": "/emoji/snow.png",
    "흐린 후 갬": "/emoji/sun.png",
    "뇌우 후 갬": "/emoji/sun.png",
    "비 후 갬": "/emoji/sun.png",
    "눈 후 갬": "/emoji/sun.png",
    "흐려져 비": "/emoji/rain.png",
    "흐려져 눈": "/emoji/snow.png",
  };

  // 참고 https://help.naver.com/service/5600/contents/12371?lang=ko
  const now = new Date();
  const todayCalendar = calendar.filter(day => day.bgnde === `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate() < 9 ? "0" + now.getDate() : now.getDate()}`);

  return (
    <div className={styles.container}>
      <div>
        <img 
          src={`${process.env.assetPrefix}/emoji/calendar.png`}
          className={styles.logo}
        />
      </div>
      <div className={styles.column}>
        <h1 className={styles.title}>{todayCalendar.length >= 1 ? (todayCalendar.length === 1 ? todayCalendar[0].schdulTitle : todayCalendar[0].schdulTitle + " 외 " + (todayCalendar.length - 1) +"개") : "특별한 일정이 없습니다."}</h1>
        <p className={styles.description}>오늘의 일정</p>
      </div>
    </div>
  );
}

