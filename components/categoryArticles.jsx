import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Layout from "../components/layout";

export default function CategoryArticle({ postsCategory }) {
  const categoryTitle =
    postsCategory.length > 0
      ? postsCategory[postsCategory.length - 1].category
      : "";

  return (
    <Layout>
      <main className={utilStyles.headingMd}>
        <h1>{categoryTitle}</h1>
        <div>
          <ul className={utilStyles.list}>
            {postsCategory.map(({ id, title, category, date }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
                <br />
                <small className={utilStyles.lightText}>
                  <p>{category}</p>
                </small>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
