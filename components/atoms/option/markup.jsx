import styles from "./styles.module.scss";

export default function Markup({
  name,
  value,
  onChange,
  label,
  checked,
  className,
}) {
  const checkedClassName = checked ? styles.checked : "";
  return (
    <label className={`${styles.label} ${checkedClassName} ${className}`}>
      {label}
      <input
        className={`${styles.input}`}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
}
