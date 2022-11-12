import { JSDOM } from "jsdom";

function pureText(text) {
  // 탭 제거 + 앞 뒤 줄바꿈 제거 + 줄바꿈 여러개 제거
  return text.replace(/\t/g, "").replace(/^\n+|\n+$/g, '').replace(/\n\n\n\n/g, "\n\n").replace(/\n\n/g, "\n").trim();
}

export default async function getBoard() {
  const links = [
    "https://school.busanedu.net/peniel-h/na/ntt/selectNttList.do?mi=669659&bbsId=1031026",
    "https://school.busanedu.net/peniel-h/na/ntt/selectNttList.do?mi=669715&bbsId=1031073",
    "https://school.busanedu.net/peniel-h/na/ntt/selectNttList.do?mi=669660&bbsId=1031027",
    "https://school.busanedu.net/peniel-h/na/ntt/selectNttList.do?mi=669686&bbsId=1031050",
  ];

  const allPosts = [];

  for (const link of links) {
    const res = await fetch(link);

    const html = await res.text()
    const dom = new JSDOM(html);

    const posts = Array.from(dom.window.document.querySelectorAll(".board-text tr"));
    posts.shift();


    for(const post of posts) {
      const [id, title, author, date, view] = Array.from(post.querySelectorAll("td")).map(tdElement => pureText(tdElement.textContent));
      allPosts.push({ id, title, author, date, view });
    }
  }
  
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return allPosts.slice(0, 4);
}

