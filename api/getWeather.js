import { JSDOM } from "jsdom";

export default async function getForecast() {
  const res = await fetch("https://weather.naver.com/today/08410690");

  const html = await res.text();
  const dom = new JSDOM(html);

  let weatherByHour = [];

  
  const tr = dom.window.document.querySelectorAll("._cnTimeTable th");

  for (const [i, th] of tr.entries()) {
    if (i === 0) continue;

    weatherByHour.push([th.querySelector(".time")?.textContent || "", th.querySelector(".blind")?.textContent] || "");
  }

  weatherByHour = weatherByHour.slice(0, 6);

  return weatherByHour;
}