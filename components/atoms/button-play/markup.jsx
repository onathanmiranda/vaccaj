import MaterialIcon from "@material/react-material-icon";

import styles from "./styles.module.scss";

export default function Markup({
  onClick,
  playing,
  hasPause,
  buttonClassName = "",
  iconClassName = "",
}) {
  return (
    <button className={`${styles.button} ${buttonClassName}`} onClick={onClick}>
      {!playing && (
        <MaterialIcon
          className={`${styles.icon} ${iconClassName}`}
          icon="play_circle_filled"
        />
      )}
      {playing && !hasPause && (
        <MaterialIcon
          className={`${styles.icon} ${iconClassName}`}
          icon="stop_circle"
        />
      )}
      {playing && hasPause && (
        <MaterialIcon
          className={`${styles.icon} ${iconClassName}`}
          icon="pause_circle"
        />
      )}
    </button>
  );
}
