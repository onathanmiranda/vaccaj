import Link from "next/link";

import Logo from "../../atoms/logo";

import styles from "./styles.module.scss";

export default function Markup({ links, style = {} }) {
  return (
    <nav className={styles.nav} style={style}>
      <Link href="/" passHref>
        <a className={styles.logoLink}>
          <Logo className={styles.logo}/>
        </a>
      </Link>
      <ul className={styles.list}>
        {links.map(({ href, title, text, isActive }) => {
          const activeClassName = isActive ? styles.active : "";
          return (
            <li key={href}>
              <Link href={href}>
                <a
                  className={`${styles.link} ${activeClassName}`}
                  title={title}
                >
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
