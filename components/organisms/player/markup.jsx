/* eslint-disable react/display-name */
import { forwardRef } from "react";

import Options from "../../atoms/options";
import ButtonIcon from "../../atoms/button-icon";

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
    onSkipPreviousClick,
    onRepeatOneClick,
    repeatOne = false,
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
          <ButtonIcon
            iconClassName={styles.hiddenButton}
            iconName={"repeat_one"}
          />
          <ButtonIcon
            onClick={onSkipPreviousClick}
            iconName={"skip_previous"}
          />
          <ButtonIcon
            onClick={onMainButtonClick}
            iconClassName={styles.playButtonIcon}
            iconName={playing ? "pause_circle" : "play_circle_filled"}
          />
          <ButtonIcon
            className={styles.hiddenButton}
            iconName={"skip_previous"}
          />
          <ButtonIcon
            className={styles.toggleButton}
            iconClassName={repeatOne ? styles.active : ""}
            iconName={"repeat_one"}
            onClick={onRepeatOneClick}
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
