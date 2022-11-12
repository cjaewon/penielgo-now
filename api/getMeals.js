import { JSDOM } from "jsdom";

function pureText(text) {
  // 탭 제거 + 원산지 제거 ex (sh) (cj) + 앞 뒤 줄바꿈 제거 + 줄바꿈 여러개 제거
  return text.replace(/\t/g, "").replaceAll("(sh)", "").replaceAll("(cj)", "").replace(/^\n+|\n+$/g, '').replace(/\n\n\n\n/g, "\n\n").replace(/\n\n/g, "\n").trim();
}

function addEmoji(text) {
  const emojiMap = {
    '밥': '밥🍚',
    '케익': '케익🍰',
    '계란후라이':'계란후라이🥘',
    '샌드위치': '샌드위치🥪',
    '쿠키': '쿠키🍪',
    '쥬스': '쥬스🥤',
    '국수': '국수🍜',
    '만두': '만두🥟',
    '고기': '고기🍖',
    '감자': '감자🥔',
    '닭': '닭🍗',
    '치킨': '치킨🍗',
    '김치': '김치🔴🥬',
    '치즈': '치즈🧀',
    '떡': '떡🍡',
  };

  const emojis = Object.entries(emojiMap);
  

  for (const [rowText, emojiText] of emojis) {
    text = text.replace(rowText, emojiText);
  }

  return text;
}

async function getMealsByDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const res = await fetch(`https://school.koreacharts.com/school/meals/B000012159/${year}${month}.html`);

  const html = await res.text();
  const dom = new JSDOM(html);

  // 4개 중에 3번째 데이터가 급식 데이터
  const meals = Array.from(dom.window.document.querySelectorAll(".row .col-md-12 .box ")[2].querySelectorAll("tr"));
  meals.shift(); // 테이블 소개(일자, 요일, 급식) 메뉴 제거

  const mealBasedKeyDate = {};
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // 해당 급식 데이터가 아직 등록 안된 경우
  if (html.includes("등록된 급식 정보가 없습니다.")) {
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      mealBasedKeyDate[`${year}년 ${month}월 ${i.toString()}일`] = "❌ 등록된 급식이 없습니다.";
    }

    return mealBasedKeyDate;
  } else {
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      mealBasedKeyDate[`${year}년 ${month}월 ${i.toString()}일`] = "❌ 급식이 없습니다.";
    }
  }

  for (let i = 0; i < meals.length; i++) {
    const [date, _, meal] = Array.from(meals[i].querySelectorAll("td"));

    mealBasedKeyDate[`${year}년 ${month}월 ${pureText(date.textContent)}일`] = addEmoji(pureText(meal.textContent));
  }

  return mealBasedKeyDate;
}

export default async function getMeals() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1); 

  const thisMonthMeal = await getMealsByDate(now);
  const nextMonthMeal = await getMealsByDate(nextMonth); 

  return Object.entries(thisMonthMeal).concat(Object.entries(nextMonthMeal));
}
