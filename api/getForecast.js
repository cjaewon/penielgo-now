import { JSDOM } from "jsdom";

function pureText(text) {
  return text.replace("\n", "").trim();
}

export default async function getForecast() {
  const res = await fetch("https://weather.naver.com/today/08410690");

  const html = await res.text();
  const dom = new JSDOM(html);

  // 온도
  const current = dom.window.document.querySelector(".weather_area .current"); // .current element
  
  current.removeChild(current.querySelector(".blind")); // 시각장애인용 설명 글자 제거
  current.removeChild(current.querySelector(".degree")); // 온도 기호 제거

  const temperature = pureText(current.textContent)

  // 날씨 / 요약
  const summary = dom.window.document.querySelector(".weather_area .summary"); // .summary element
  const weather = pureText(summary.querySelector(".weather").textContent);

  summary.removeChild(summary.querySelector(".weather"));

  const comment = pureText(summary.textContent);

  return {
    temperature,
    weather,
    comment,
  }
}