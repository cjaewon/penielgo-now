import { JSDOM } from "jsdom";

export default async function getCount() {
  let year = new Date().getFullYear() + 1;
  let res = await fetch(`https://superkts.com/cal/su_day/${year}`);

  let html = await res.text();
  let dom = new JSDOM(html);
  
  if (!dom.window.document.querySelector(".result").textContent.includes("남았습니다.")) {
    year++;
  }

  res = await fetch(`https://superkts.com/cal/su_day/${year}`);

  html = await res.text();
  dom = new JSDOM(html);
  
  const count = parseInt(dom.window.document.querySelector(".result > b").textContent.replace("일", ""));
  
  if (dom.window.document.querySelector(".result").textContent.includes("남았습니다.")) {
    year++ 
  }

  return count;
}