import styles from "./styles.module.scss";

export default function Markup({ onClick, children, className, outlined }) {
  const outlinedClassName = outlined ? styles.outlined : "";

  return (
    <button
      className={`${styles.button} ${outlinedClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
