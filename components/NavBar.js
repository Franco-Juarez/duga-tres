import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Image from "next/image";
import Hamburger from "./svg/hamburger";
import { useState } from "react";


export default function NavBar() {
  const [open, setOpen] = useState(false);

  const setMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.navFullWidth}>
      <div className={styles.navContainer}>
      <Link
        href="/">
          <Image width={180} height={45} src="/images/logo.png" />
        </Link>
        <nav className={styles.navLink}>
          <ul>
            <li>
              <Link href="/nosotros">nosotros</Link>
            </li>
            <li>
              <Link href="/contact">contacto</Link>
            </li>
            <li>
              <Link href="/contact">newsletter</Link>
            </li>
            <li>
              <a target="_blank" href="https://cafecito.app/">colaborá</a>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburgerContainer}>
          <button onClick={setMenu} className={styles.hamburgerBtn}>
            <Hamburger />
          <nav className={open ? styles.openNav : styles.closedNav}>
            <ul>
              <li>
                <Link href="/nosotros">nosotros</Link>
              </li>
              <li>
                <Link href="/contact">contacto</Link>
              </li>
              <li>
                <Link href="/newsletter">newsletter</Link>
              </li>
              <li>
                <a target="_blank" href="https://cafecito.app/">colaborá</a>
              </li>
            </ul>
          </nav>
          </button>
        </div>
      </div>
    </div>
  );
}
