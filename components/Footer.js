import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Twitter from "./svg/x-twitter";
import Instagram from "./svg/instagram-icon";
import MailIcon from "./svg/mail-icon";

export default function Footer() {
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
              <Link href="https://twitter.com/home?lang=es" target="_blank">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com" target="_blank">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="mailto:duga3@gmail.com" target="_blank">
                <MailIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
