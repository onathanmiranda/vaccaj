import Link from "next/link";
import styles from "./styles.module.scss";

export default function Markup({ children, className, href }) {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${className}`}>{children}</a>
    </Link>
  );
}
