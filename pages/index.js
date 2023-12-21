import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getLatestPosts } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Slider from '../components/slider';
import LastPost from '../components/LastPost';
import NavFilter from '../components/NavFilter';
import TitleContainer from '../components/TitleContainer';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const latestPosts = getLatestPosts();

  return {
    props: {
      allPostsData,
      latestPosts,
    },
  };
}

export default function Home({ latestPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TitleContainer />
      <NavFilter />
      <Slider
      postData={latestPosts}
      />
    </Layout>
  );
}