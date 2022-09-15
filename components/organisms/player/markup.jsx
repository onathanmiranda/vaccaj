import { useRef, useMemo } from "react";
import MaterialIcon from "@material/react-material-icon";

import Option from "../../atoms/option";
import ButtonIcon from "../../atoms/button-icon";
import Select from "../../atoms/select";

import styles from "./styles.module.scss";

export default function Markup({
  className = "",
  onMainButtonClick,
  playing,
  voiceTypesOptions,
  instrumentsOptions,
  onSkipPreviousClick,
  onRepeatOneClick,
  playbackRate,
  onChangePlaybackRate,
  repeatOne = false,
  speedOptions = [],
  playbackRateLabel,
}) {
  const showVoiceTypeOptions =
    voiceTypesOptions && voiceTypesOptions.length > 1;

  const showInstrumentsOptions =
    instrumentsOptions && instrumentsOptions.length > 1;

  const playbackSpeedSelectRef = useRef();

  return (
    <div className={`${styles.outerWrapper} ${className}`}>
      {(showInstrumentsOptions || showVoiceTypeOptions) && 
        <div className={styles.playerOptions}>
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
        </div>
      }
      <div className={styles.player}>
        <ButtonIcon
          className={styles.hiddenButton}
          iconName={"skip_previous"}
        />
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
        <label htmlFor="speed" className={styles.playbackRateLabel}>
          <MaterialIcon className={styles.playbackRateIcon} icon={"speed"} />
          <div className={styles.playbackRateLabelText}>
            {playbackRateLabel}
          </div>
          <Select
            name="speed"
            options={speedOptions}
            value={playbackRate}
            onChange={onChangePlaybackRate}
            className={styles.playbackRateSelect}
            ref={playbackSpeedSelectRef}
          />
        </label>
      </div>
    </div>
  );
}
