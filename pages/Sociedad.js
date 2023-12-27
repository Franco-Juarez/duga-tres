import { getPostsByCategory } from "../lib/posts";
import CategoryArticle from "../components/categoryArticles";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const postsSociedad = getPostsByCategory("sociedad");
  return {
    props: {
      postsSociedad,
    },
  };
}

export default function sociedad({ postsSociedad }) {
  return (
    <div>
      <main className={utilStyles.headingMd}>
      <CategoryArticle postsCategory={postsSociedad} />
      </main>
    </div>
  );
}
