import Image from "next/image";
import styles from "./lastPost.module.css";
import Link from "next/link";

const LastPost = () => {
  return (
    <div className={styles.lastPost}>
      <h1>Título principal</h1>
      <div className={styles.footerPost}>
        <div className={styles.authorBox}>
          <Image width={50} height={50} src={"/images/profile.jpg"} />
          <div className={styles.tagsBox}>
            <p>Autor</p>
            <div>
              <Link href="/">Tag 1</Link>
              <Link href="/">Tag 2</Link>
            </div>
          </div>
        </div>
        <Link href="/"> --Z </Link>
      </div>
    </div>
  );
};

export default LastPost;
