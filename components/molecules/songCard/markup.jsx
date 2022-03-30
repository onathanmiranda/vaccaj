import MaterialIcon from "@material/react-material-icon";
import styles from "./styles.module.scss";

export default function Markup({
  partialLyric,
  title,
  onCLickPlay,
  className,
  recordings,
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div>
        <h3 className={styles.partialLyric}>{partialLyric}...</h3>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.buttons}>
        {recordings.map((recording) => {
          return (
            <button
              className={styles.button}
              key={recording.id}
              onClick={() => onCLickPlay(recording)}
            >
              {recording.voiceType.title}
              <MaterialIcon className={styles.icon} icon="play_arrow" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
