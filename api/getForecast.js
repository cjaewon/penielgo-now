import { JSDOM } from "jsdom";

export default async function getForecast() {
  const res = await fetch("https://weather.naver.com/today/08410690");

  const html = await res.text();
  const dom = new JSDOM(html);
  
  const temperature = dom.window.document.querySelector(".weather_area > .weather_now strong").textContent.replace(/\n|\s/g, "").replace("현재온도", "");
  const weather = dom.window.document.querySelector(".weather_area > .weather_now .summary > .weather").textContent.replace(/\n|\s/g, "");
  const comment = dom.window.document.querySelector(".weather_area > .weather_now .summary").textContent.replace(/\n|\s/g, "").replace(weather, "");

  return {
    temperature,
    weather,
    comment,
  }
}