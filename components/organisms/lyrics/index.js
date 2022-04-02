import { useEffect, useState, useCallback } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";

import styles from "./styles.module.scss";

export default function Lyrics() {
  const [hidden, setHidden] = useState(false);

  const { playerContextState } = usePlayerContext();
  const { song, file } = playerContextState;
  const { lyrics } = song;

  const onClose = useCallback(() => {
    setHidden(true);
  }, [setHidden]);

  useEffect(() => {
    setHidden(false);
  }, [file]);

  const display = song && !hidden;

  return (
    <>
      {display && (
        <aside className={styles.lyrics}>
          <button onClick={onClose} className={styles.button}>
            Fechar a Letra
          </button>
          {lyrics.split("\n").map((line) => (
            <div key={line}>{line}</div>
          ))}
        </aside>
      )}
    </>
  );
}
