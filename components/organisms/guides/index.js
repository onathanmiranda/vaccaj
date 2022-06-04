import { useState, useCallback, useMemo } from "react";
import MaterialIcon from "@material/react-material-icon";

import Option from "../../atoms/option";

import { usePlayerContext } from "../../../contexts/playerContext";

import styles from "./styles.module.scss";

export default function Guides() {
  const [guideOption, setGuideOption] = useState(1);

  const { playerContextState, setGuidesVisibility } = usePlayerContext();

  const guidesOptions = useMemo(
    () => [
      {
        value: 1,
        label: "partitura",
        onChange: () => {
          setGuideOption(1);
        },
        name: "guideOptions",
        checked: guideOption === 1,
      },
      {
        value: 2,
        label: "letra",
        onChange: () => {
          setGuideOption(2);
        },
        name: "guideOptions",
        checked: guideOption === 2,
      },
    ],
    [setGuideOption, guideOption]
  );

  const { song, showGuides } = playerContextState;
  const { lyrics, sheets, title } = song;

  const onClose = useCallback(() => {
    setGuidesVisibility(false);
  }, [setGuidesVisibility]);

  const sheetsPages = sheets?.filePaths ? sheets.filePaths : [];

  return (
    <>
      {showGuides && (
        <aside className={styles.wrapper}>
          <header className={styles.header}>
            <div className={styles.optionsWrapper}>
              {guidesOptions.map((option) => {
                return <Option key={option.value} {...option} />;
              })}
            </div>
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
