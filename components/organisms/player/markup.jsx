/* eslint-disable react/display-name */
import { forwardRef } from "react";

import Options from "../../atoms/options";
import ButtonPlay from "../../atoms/button-play";

import styles from "./styles.module.scss";

export default forwardRef((props, ref) => {
  const {
    src,
    type,
    className,
    onMainButtonClick,
    playing,
    recordingsOptions,
    onEnded,
  } = props;

  return (
    <>
      <div className={`${styles.wrapper} ${className}`}>
        {Boolean(recordingsOptions.length) && (
          <div className={styles.voicesOptionsWrapper}>
            <div className={styles.voicesOptions}>
              {recordingsOptions.map((option) => {
                return (
                  <Options
                    className={styles.option}
                    key={option.value}
                    {...option}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div className={styles.player}>
          <ButtonPlay
            playing={playing}
            hasPause={true}
            iconClassName={styles.playButtonIcon}
            onClick={onMainButtonClick}
          />
        </div>
      </div>
      <audio
        onEnded={onEnded}
        tabIndex="-1"
        className={styles.audio}
        ref={ref}
        controls={true}
      >
        <source src={src} type={type} />
        Seu navegador não suporta áudio em HTML5.
      </audio>
    </>
  );
});
