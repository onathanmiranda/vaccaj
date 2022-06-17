import Option from "../../atoms/option";
import ButtonIcon from "../../atoms/button-icon";

import styles from "./styles.module.scss";

export default function Markup({
  className,
  onMainButtonClick,
  playing,
  voiceTypesOptions,
  instrumentsOptions,
  onSkipPreviousClick,
  onRepeatOneClick,
  repeatOne = false,
}) {
  const showVoiceTypeOptions =
    voiceTypesOptions && voiceTypesOptions.length > 1;

  const showInstrumentsOptions =
    instrumentsOptions && instrumentsOptions.length > 1;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {showInstrumentsOptions && (
        <div className={styles.voiceTypesOptionsWrapper}>
          <div className={styles.voiceTypesOptions}>
            {instrumentsOptions.map((option) => {
              return (
                <Option
                  className={styles.option}
                  key={option.value}
                  {...option}
                />
              );
            })}
          </div>
        </div>
      )}
      {showVoiceTypeOptions && (
        <div className={styles.voiceTypesOptionsWrapper}>
          <div className={styles.voiceTypesOptions}>
            {voiceTypesOptions.map((option) => {
              return (
                <Option
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
        <ButtonIcon onClick={onSkipPreviousClick} iconName={"skip_previous"} />
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
  );
}
