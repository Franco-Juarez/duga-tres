import { getPostsByCategory } from "../lib/posts";
import CategoryArticle from "../components/categoryArticles";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const postEconomia = getPostsByCategory("economia");
  return {
    props: {
      postEconomia,
    },
  };
}

export default function economia({ postEconomia }) {
  return (
    <div>
      <main className={utilStyles.headingMd}>
        <CategoryArticle postsCategory={postEconomia} />
      </main>
    </div>
  );
}
