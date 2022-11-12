import Head from 'next/head'
import Header from '../components/Header';
import getCount from '../api/getCount';
import getForecast from '../api/getForecast';
import Meal from '../components/Meal';
import getMeals from '../api/getMeals';
import getCorona from '../api/getCorona';
import Corona from '../components/Corona';
import Clock from '../components/Clock';

export default function Home({ count, forecast, meals, corona, generatedTime }) {
  return (
    <div>
      <Head>
        <title>브니엘고 나우</title>
        <meta name="description" content="브니엘고 나우는 브니엘고등학교 관련 정보를 제공하는 알림판입니다." />
        <meta name="keywords" content="브니엘고등학교, 알림판, 현황판, 대시보드" />
      </Head>

      <Header 
        count={count} 
        forecast={forecast}
        generatedTime={generatedTime}
      />

      <Meal
        meals={meals}
      />
      <Corona
        corona={corona}
      />
      <Clock corona={corona} />
    </div>
  );
}

export async function getStaticProps() {
  const count = await getCount();
  const forecast = await getForecast();
  const meals = await getMeals();
  const corona = await getCorona();

  const generatedTime = new Date().toString();

  return {
    props: {
      count,
      forecast,
      meals,
      corona,
      generatedTime,
    },
  };
}