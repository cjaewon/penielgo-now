import Head from 'next/head'
import Script from 'next/script';
import Header from '../components/Header';
import getCount from '../api/getCount';
import getWeather from '../api/getWeather';
import Center from '../components/Center';
import getMeals from '../api/getMeals';
import getCorona from '../api/getCorona';
import Footer from '../components/Footer';
import getBoard from '../api/getBoard';
import getCalendar from '../api/getCalendar';

import '../utils/refresh';

export default function Home({ count, weather, meals, corona, board, calendar, generatedTime }) {
  return (
    <div>
      <Head>
        <title>브니엘고 나우</title>
        <meta name="description" content="브니엘고 나우(NOW)는 브니엘고등학교 관련 정보를 제공하는 알림판입니다." />
        <meta name="keywords" content="브니엘고등학교, 알림판, 현황판, 대시보드" />
        <Script src="https://app.embed.im/snow.js" defer />
      </Head>

      <Header 
        count={count} 
        calendar={calendar}
        generatedTime={generatedTime}
      />

      <Center
        meals={meals}
        weather={weather}
      />
      <Footer
        corona={corona}
        board={board}
        calendar={calendar}
      />
    </div>
  );
}

export async function getStaticProps() {
  const count = await getCount();
  const weather = await getWeather();
  const meals = await getMeals();
  const corona = await getCorona();
  const board = await getBoard();
  const calendar = await getCalendar();

  const now = new Date();
  const kst = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000 + (9 * 60 * 60 * 1000))).toString();

  return {
    props: {
      count,
      weather,
      meals,
      corona,
      board,
      calendar,
      generatedTime: kst,
    },
  };
}