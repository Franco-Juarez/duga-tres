import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Image from "next/image";


export default function NavBar() {
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
           <p>Buscar</p>
          </ul>
        </nav>
      </div>
    </div>
  );
}
