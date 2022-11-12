async function getCoronaTesting() {
  const response = await fetch('https://coronaboard.kr/');
  const regex = /"chartTesting":(.+?),"stat/g

  const html = await response.text();

  const matches = regex.exec(html);
  const data = JSON.parse(matches[1]);

  return {
    recently_testing: data.testing[data.testing.length - 1],
    recently_testing_increase: data.testing[data.testing.length - 1] - data.testing[data.testing.length - 2],
  }
};

export default async function getCorona() {
  const response = await fetch('https://coronaboard.kr/generated/KR.json');
  const testing = await getCoronaTesting();

  const data = await response.json();

  return {
    recently_date: data.date[data.date.length - 1],
    recently_active: data.active[data.active.length - 1],
    recently_confirmed_acc: data.confirmed_acc[data.confirmed_acc.length - 1],
    recently_death_acc: data.death_acc[data.death_acc.length - 1],
    recently_released_acc: data.released_acc[data.released_acc.length - 1],
    recently_confirmed: data.confirmed[data.confirmed.length - 1],
    recently_death: data.death[data.death.length - 1],
    recently_released: data.released[data.released.length - 1],
    ...testing,
  };
};