import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getPostsByCategoryPosts } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import styles from "./post.module.css"
import Image from 'next/image';
import Slider from '../../components/Slider';

export async function getStaticProps({ params }) {
  const postId = params.id;
  const postData = await getPostData(postId);
  const relatedPosts = getPostsByCategoryPosts(postData.category, postId);

  return {
    props: {
      postData,
      relatedPosts
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

export default function Post({ postData, relatedPosts }) {

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
            <div className={styles.authorDateContainer}><p>{postData.author}</p> |  <Date dateString={postData.date} /></div>
            <a href='#sliderTitle'>{postData.category}</a>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <section id='sliderTitle' className={styles.sliderWrapper}>
        <h2 className={styles.publicationTitle}>Más en {postData.category}</h2>
        <Slider 
        postData={relatedPosts}
        />
      </section>
    </Layout>
  );
}
