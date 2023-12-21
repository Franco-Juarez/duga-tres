import Link from "next/link";
import styles from "../styles/navBar.module.css";
import Society from "./svg/society";
import Economy from "./svg/economy";
import Work from "./svg/work";
import Imagine from "./svg/imagine";
import Future from "./svg/future";
import Thunder from "./svg/thunder";

export default function NavFilter() {
  return (
    <nav className={styles.filterNav}>
      <ul>
        <li>
          <Thunder />
          <Link href="/Sociedad">últimos</Link>
        </li>
        <li>
          <Society />
          <Link href="/Sociedad">sociedad</Link>
        </li>
        <li>
          <Economy />
          <Link href="/Economia">economía</Link>
        </li>
        <li>
          <Work />
          <Link href="/Economia">trabajo</Link>
        </li>
        <li>
          <Future />
          <Link href="/Economia">futuro</Link>
        </li>
        <li>
          <Imagine />
          <Link href="/Economia">imaginación política</Link>
        </li>
      </ul>
    </nav>
  );
}
