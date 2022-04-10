import { useEffect, useState, useCallback } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";
import { useGuidesContext } from "../../../contexts/guidesContext";

import styles from "./styles.module.scss";

export default function Guides() {
  const [displayOnlyLyrics, setDisplayOnlyLyrics] = useState(false);

  const { playerContextState } = usePlayerContext();
  const { guidesContextState, setGuidesVisibility } = useGuidesContext();

  const { shown } = guidesContextState;
  const { song } = playerContextState;
  const { lyrics, sheets, title } = song;

  const onClose = useCallback(() => {
    setGuidesVisibility(false);
  }, [setGuidesVisibility]);

  const onToggleLyric = useCallback(() => {
    setDisplayOnlyLyrics((oldState) => !oldState);
  }, [setDisplayOnlyLyrics]);

  const closeButtonText = displayOnlyLyrics
    ? "fechar a letra"
    : "fechar a partitura";
  const toggleButtonText = displayOnlyLyrics
    ? "mostrar partitura"
    : "mostrar apenas letra";

  const sheetsPages = sheets?.filePaths ? sheets.filePaths : [];

  return (
    <>
      {shown && (
        <aside className={styles.wrapper}>
          <header className={styles.header}>
            <button onClick={onToggleLyric} className={styles.button}>
              {toggleButtonText}
            </button>
            <button onClick={onClose} className={styles.button}>
              {closeButtonText}
            </button>
          </header>

          {displayOnlyLyrics && (
            <div className={styles.lyricsWrapper}>
              {lyrics.split("\n").map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          )}

          {!displayOnlyLyrics && (
            <div className={styles.sheetsWrapper}>
              {sheetsPages.map((path) => (
                <img
                  className={styles.sheetsPage}
                  src={path}
                  alt={title}
                  title={title}
                  key={path}
                />
              ))}
            </div>
          )}
        </aside>
      )}
    </>
  );
}
