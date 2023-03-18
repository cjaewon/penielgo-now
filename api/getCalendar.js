export default async function getCalendar() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const form = new FormData();

  form.append("srchDate", `${year}/${month}/`);
  form.append("sysId", "peniel-h");
  
  const res = await fetch("https://school.busanedu.net/peniel-h/sv/schdulView/selectWidgSvList.do", {
    method: "POST",
    body: form,
  });

  const data = await res.json();

  return data.list;
}