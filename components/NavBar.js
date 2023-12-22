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
        <nav className={styles.navLink}>
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
        <div className={styles.hamburgerContainer}>
          <button onClick={setMenu} className={styles.hamburgerBtn}>
            <Hamburger />
          <nav className={open ? styles.openNav : styles.closedNav}>
            <ul>
              <li>
                <Link href="/">Economía</Link>
              </li>
              <li>
                <Link href="/">Sociedad</Link>
              </li>
              <li>
                <Link href="/">Trabajo</Link>
              </li>
              <li>
                <Link href="/">Futuro</Link>
              </li>
              <li>
                <Link href="/">Imaginación política</Link>
              </li>
              <li className={styles.closedLi}>
                <Link href="/">Nosotros</Link>
              </li>
              <li className={styles.closedLi}>
                <Link href="/">Contacto</Link>
              </li>
            </ul>
          </nav>
          </button>
        </div>
      </div>
    </div>
  );
}
