import { useState, useCallback } from "react";
import MaterialIcon from "@material/react-material-icon";
import { usePlayerContext } from "../../../contexts/playerContext";
import Toggle from "../../atoms/toggle";

import styles from "./styles.module.scss";

export default function Guides() {
  const [displayOnlyLyrics, setDisplayOnlyLyrics] = useState(false);

  const { playerContextState, setGuidesVisibility } = usePlayerContext();

  const { song, showGuides } = playerContextState;
  const { lyrics, sheets, title } = song;

  const onClose = useCallback(() => {
    setGuidesVisibility(false);
  }, [setGuidesVisibility]);

  const onToggleLyric = useCallback(() => {
    setDisplayOnlyLyrics((oldState) => !oldState);
  }, [setDisplayOnlyLyrics]);

  const sheetsPages = sheets?.filePaths ? sheets.filePaths : [];

  return (
    <>
      {showGuides && (
        <aside className={styles.wrapper}>
          <header className={styles.header}>
            <Toggle
              toggledLabel="letra"
              unToggledLabel="partitura"
              onToggle={onToggleLyric}
              toggled={displayOnlyLyrics}
            />

            <button onClick={onClose} className={styles.button}>
              Fechar partitura
              <MaterialIcon className={styles.icon} icon="cancel" />
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
