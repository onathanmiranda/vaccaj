import Link from "next/link";

import ButtonIcon from "../../atoms/button-icon";
import styles from "./styles.module.scss";

export default function Markup({
  partialLyric,
  title,
  onClick,
  className,
  recordings,
  isSelected,
  isPlaying,
  songHref,
  minimal,
}) {
  
  const playingClassName = isSelected ? styles.selected : "";
  const minimalClassName = minimal ? styles.minimal : "";

  return (
    <Link href={songHref}>
      <a
        onClick={() => onClick(recordings[0])}
        className={`${styles.card} ${playingClassName} ${className}`}
      >
        <div>
          <h3 className={`${styles.title} ${minimalClassName}`}>{title}</h3>
          {partialLyric && (
            <p className={`${styles.partialLyric} ${minimalClassName}`}>{partialLyric}...</p>
          )}
        </div>
        {!minimal && (
          <ButtonIcon
            iconName={isPlaying ? "pause_circle" : "play_circle_filled"}
          />
        )}
      </a>
    </Link>
  );
}
