import MaterialIcon from "@material/react-material-icon";

import styles from "./styles.module.scss";

export default function Markup({
  onClick,
  className = "",
  iconClassName = "",
  iconName = "",
}) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <MaterialIcon
        className={`${styles.icon} ${iconClassName}`}
        icon={iconName}
      />
    </button>
  );
}
