import styles from "./styles.module.scss";

export default function Markup({
  toggled,
  onClick,
  toggledLabel,
  unToggledLabel,
}) {
  const toggledClassName = toggled ? styles.toggled : "";

  return (
    <div className={`${styles.wrapper} ${toggledClassName}`}>
      <span className={`${styles.label} ${styles.unToggledLabel}`}>
        {unToggledLabel}
      </span>
      <button className={`${styles.button}`} onClick={onClick}>
        <div className={styles.ball} />
      </button>
      <span className={`${styles.label} ${styles.toggledLabel}`}>
        {toggledLabel}
      </span>
    </div>
  );
}
