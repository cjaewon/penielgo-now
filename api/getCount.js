import { JSDOM } from "jsdom";

export default async function getCount() {
  let year = new Date().getFullYear() + 1;
  let res = await fetch(`https://superkts.com/cal/su_day/${year}`);

  let html = await res.text();
  let dom = new JSDOM(html);
  
  // 수능이 지난 후 이번연도 수능을 가져오는 것을 방지 
  if (!dom.window.document.querySelector(".result").textContent.includes("남았습니다.")) {
    year += 1;

    res = await fetch(`https://superkts.com/cal/su_day/${year}`);
    html = await res.text();
    dom = new JSDOM(html);
  }
  
  return parseInt(dom.window.document.querySelector(".result > b").textContent.replace("일", ""));
}