import Link from "next/link";
import styles from "../styles/navBar.module.css";

const Footer = () => {
  return (
    <div className={styles.fullWidthFooter}>
      <div className={styles.footerContainer}>
        <p>
          @Duga-3 - 2023. All rights reserved. Codeado con ❤️ por
          <Link href="/">Fran</Link>
        </p>
        <nav>
          <ul>
            <li>
              <Link href="/nosotros">nosotros</Link>
            </li>
            <li>
              <Link href="/contact">contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
