import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getLatestPosts } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import styles from "./post.module.css"
import Image from 'next/image';
import Link from 'next/link';
import Slider from '../../components/Slider';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const latestPosts = getLatestPosts();

  return {
    props: {
      postData,
      latestPosts,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, latestPosts }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.post}>
        <h1>
          {postData.title}
        </h1>
        <div className={styles.authorBox}>
          <Image 
          width={50}
          height={50}
          border-radius={"50%"}
          src={postData.image}
          />
          <div className={styles.authorMeta}>
            <p>{postData.author}</p>
            <Link href={`/${postData.category}`}>{postData.category}</Link>
          </div>
        </div>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <section className={styles.sliderWrapper}>
        <h2>Últimas publicaciones</h2>
        <Slider 
        postData={latestPosts}
        />
      </section>
    </Layout>
  );
}
