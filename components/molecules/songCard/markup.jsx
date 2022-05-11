import ButtonPlay from "../../atoms/button-play";
import styles from "./styles.module.scss";

export default function Markup({
  partialLyric,
  title,
  onClick,
  className,
  recordings,
  isSelected,
  isPlaying,
}) {
  const playingClassName = isSelected ? styles.selected : "";

  return (
    <div
      onClick={() => onClick(recordings[0])}
      className={`${styles.card} ${playingClassName} ${className}`}
    >
      <div>
        <h3 className={styles.title}>{title}</h3>
        {partialLyric && (
          <p className={styles.partialLyric}>{partialLyric}...</p>
        )}
      </div>
      <ButtonPlay playing={isPlaying} />
    </div>
  );
}
