import { getPostsByCategory } from "../lib/posts";
import CategoryArticle from "../components/categoryArticles";

export async function getStaticProps() {
  const postsSociedad = getPostsByCategory("Economía");
  return {
    props: {
      postsSociedad,
    },
  };
}

export default function Sociedad({ postsSociedad }) {
  return (
    <div>
      <CategoryArticle postsCategory={postsSociedad} />
    </div>
  );
}
