import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Image from "next/image";
import Twitter from "./svg/x-twitter";
import Instagram from "./svg/instagram-icon";
import MailIcon from "./svg/mail-icon";

const NavBar = () => {
  return (
    <div className={styles.navFullWidth}>
      <div className={styles.navContainer}>
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
        <Image width={180} height={45} src="/images/logo.png" />
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
};

export default NavBar;
