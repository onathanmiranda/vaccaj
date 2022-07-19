import { useState, useMemo, useEffect } from "react";

import Option from "../../atoms/option";
import Sheet from "../../molecules/sheet";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function Guides({ song }) {
  const [guideOption, setGuideOption] = useState(1);

  const guidesOptions = useMemo(() => {
    if (!song) return [];

    return [
      {
        value: 1,
        label: "partitura",
        optionRef: "sheets",
        onChange: () => {
          setGuideOption(1);
        },
        name: "guideOptions",
        checked: guideOption === 1,
      },
      {
        value: 2,
        label: "letra",
        optionRef: "lyrics",
        onChange: () => {
          setGuideOption(2);
        },
        name: "guideOptions",
        checked: guideOption === 2,
      }
    ].filter(({ optionRef }) => {
      return Boolean(song[optionRef]);
    });
  }, [guideOption, song, setGuideOption]);

  useEffect(() => {
    if (guidesOptions.length === 0) return;
    if (!guidesOptions.find(({ value }) => value === guideOption)) {
      setGuideOption(guidesOptions[0].value);
    }
  }, [guidesOptions, guideOption, setGuideOption, song]);

  const { lyrics, beginning, sheets } = song;

  const sheetsPages = sheets?.filePaths ? sheets.filePaths : [];

  const showGuidesMenu = guidesOptions.length > 1;

  return (
    <>
      <div className={styles.wrapper}>
        {showGuidesMenu && (
          <header className={styles.header}>
            <div className={styles.optionsWrapper}>
              {guidesOptions &&
                guidesOptions.map((option) => {
                  return <Option key={option.value} {...option} />;
                })}
            </div>
          </header>
        )}

        {guideOption === 2 && (
          <div className={styles.lyricsWrapper}>
            {lyrics &&
              lyrics.split("\n").map((line) => <div key={line}>{line}</div>)}
          </div>
        )}

        {guideOption === 1 && (
          <div className={styles.sheetsWrapper}>
            {sheetsPages &&
              sheetsPages.map((path) => (
                <img
                  className={styles.sheetsPage}
                  src={path}
                  alt={`Partitura ${beginning} | ${config.siteTitle}`}
                  title={`Partitura ${beginning} | ${config.siteTitle}`}
                  key={path}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
