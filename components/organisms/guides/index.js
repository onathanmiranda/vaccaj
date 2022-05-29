import { useState, useCallback } from "react";
import Image from "next/image";
import MaterialIcon from "@material/react-material-icon";

import Toggle from "../../atoms/toggle";

import { usePlayerContext } from "../../../contexts/playerContext";

import styles from "./styles.module.scss";

export default function Guides() {
  const guidesOptions = [
    { id: 1, label: "partitura" },
    { id: 2, label: "letra" },
  ];

  const initialGuideOptionId = guidesOptions[0].id;

  const [guideOption, setGuideOption] = useState(initialGuideOptionId);

  const { playerContextState, setGuidesVisibility } = usePlayerContext();

  const { song, showGuides } = playerContextState;
  const { lyrics, sheets, title } = song;

  const onClose = useCallback(() => {
    setGuidesVisibility(false);
  }, [setGuidesVisibility]);

  const toggleGuideOptionHandler = useCallback(
    (id) => {
      setGuideOption(id);
    },
    [setGuideOption]
  );

  const sheetsPages = sheets?.filePaths ? sheets.filePaths : [];

  return (
    <>
      {showGuides && (
        <aside className={styles.wrapper}>
          <header className={styles.header}>
            <Toggle
              options={guidesOptions}
              onToggle={toggleGuideOptionHandler}
              selectedOption={guideOption}
              name="guideOptions"
            />
            <button onClick={onClose} className={styles.button}>
              <MaterialIcon className={styles.icon} icon="cancel" />
            </button>
          </header>

          {guideOption === 2 && (
            <div className={styles.lyricsWrapper}>
              {lyrics.split("\n").map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          )}

          {guideOption === 1 && (
            <div className={styles.sheetsWrapper}>
              {sheetsPages.map((path) => (
                <Image
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
