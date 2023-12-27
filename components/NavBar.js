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
        <Link
        href="/">
          <Image width={180} height={45} src="/images/logo.png" />
        </Link>
        <div className={styles.hamburgerContainer}>
          <button onClick={setMenu} className={styles.hamburgerBtn}>
            <Hamburger />
          <nav className={open ? styles.openNav : styles.closedNav}>
            <ul>
              <li>
                <Link href="/Economia">Economía</Link>
              </li>
              <li>
                <Link href="/Sociedad">Sociedad</Link>
              </li>
              <li>
                <Link href="/trabajo">Trabajo</Link>
              </li>
              <li>
                <Link href="/futuro">Futuro</Link>
              </li>
              <li>
                <Link href="/imaginacion-politica">Imaginación política</Link>
              </li>
              <li className={styles.closedLi}>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li className={styles.closedLi}>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          </button>
        </div>
      </div>
    </div>
  );
}
