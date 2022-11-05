import Head from 'next/head'
import Header from '../components/Header';
import getCount from '../api/getCount';

export default function Home({ count }) {
  return (
    <div>
      <Head>
        <title>브니엘고 나우</title>
        <meta name="description" content="브니엘고 나우는 브니엘고등학교 관련 정보를 제공하는 알림판입니다." />
        <meta name="keywords" content="브니엘고등학교, 알림판, 현황판, 대시보드" />
      </Head>

      <Header count={count} />
    </div>
  );
}

export async function getStaticProps() {
  const count = await getCount();

  return {
    props: {
      count,
    },
  };
}