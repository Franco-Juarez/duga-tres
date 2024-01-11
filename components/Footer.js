import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Twitter from "./svg/x-twitter";
import Instagram from "./svg/instagram-icon";
import MailIcon from "./svg/mail-icon";
import NewsletterForm from "./newsletterForm";

export default function Footer() {
  return (
    <div className={styles.fullWidthFooter}>
        <NewsletterForm />
      <div className={styles.footerContainer}>
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
        <p>
          Duga-3 • @2023 • All rights reserved
        </p>
      </div>
      <p className={styles.credits}>
        Codeado con ❤️ por <a target="_blank" href="https://github.com/Franco-Juarez">Fran</a>
      </p>
    </div>
  );
}
