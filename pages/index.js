import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, getLatestPosts } from '../lib/posts';
import Slider from '../components/Slider';
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