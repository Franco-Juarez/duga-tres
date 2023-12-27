import { getPostsByCategory } from "../lib/posts";
import CategoryArticle from "../components/categoryArticles";

export async function getStaticProps() {
  const postEconomia = getPostsByCategory("economia");
  return {
    props: {
      postEconomia,
    },
  };
}

export default function Economia({ postEconomia }) {
  return (
    <div>
      <CategoryArticle postsCategory={postEconomia} />
    </div>
  );
}
