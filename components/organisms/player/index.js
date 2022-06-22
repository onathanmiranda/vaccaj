import { useCallback, useMemo } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";

import Markup from "./markup";

export default function Player({ className }) {
  const {
    playerContextState,
    play,
    load,
    pause,
    changeSongRecording,
    setRepeatOne,
    changePlaybackRate,
  } = usePlayerContext();

  const { recording, player, song } = playerContextState;

  const onClick = useCallback(() => {
    if (player.playing) return pause();
    if (!player.playing) return play();
  }, [pause, play, player.playing]);

  const onSkipPreviousClick = useCallback(() => {
    load();
    play();
  }, [play, load]);

  const onRepeatOneClick = useCallback(
    (e) => {
      e.target.blur();
      setRepeatOne(!player.repeatOne);
    },
    [setRepeatOne, player.repeatOne]
  );

  const handleChangingRecording = useCallback(
    (recording) => {
      changeSongRecording({ recording });
      load();
      play();
    },
    [changeSongRecording, load, play]
  );

  const onChangePlaybackRate = useCallback(
    (e) => {
      changePlaybackRate(e.target.value);
    },
    [changePlaybackRate]
  );

  const { voiceTypesOptions, instrumentsOptions } = useMemo(() => {
    if (!song) return [];
    if (!song.voiceTypesOptions) return [];

    return {
      voiceTypesOptions: song.voiceTypesOptions.map((option) => ({
        label: option.voiceType.title,
        value: option.recordings[0].id,
        onChange: () => {
          handleChangingRecording(option.recordings[0]);
        },
        name: "voicetype",
        checked: Boolean(
          option.recordings.find(({ id }) => id === recording.id)
        ),
      })),
      instrumentsOptions: song.voiceTypesOptions.reduce((acc, curr) => {
        const isVoiceSelected = curr.recordings.find(
          ({ id }) => id === recording.id
        );
        if (!isVoiceSelected) return acc;

        const options = curr.recordings.map((_recording) => {
          return {
            label: _recording.instrumentsOptionsTitle,
            value: _recording.id,
            onChange: () => {
              handleChangingRecording(_recording);
            },
            name: "instruments",
            checked: recording.id === _recording.id,
          };
        });

        return [...acc, ...options];
      }, []),
    };
  }, [song, recording, handleChangingRecording]);

  const speedOptions = useMemo(() => {
    const speeds = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
    const labels = [
      `${speeds[0]}x`,
      `${speeds[1]}x`,
      `${speeds[2]}x`,
      "Normal",
      `${speeds[4]}x`,
      `${speeds[5]}x`,
      `${speeds[6]}x`,
      `${speeds[7]}x`,
    ];
    return speeds.map((speed, i) => ({ value: speed, label: labels[i] }));
  }, []);

  const playbackRateLabel = useMemo(() => {
    return speedOptions.find(
      (option) => `${option.value}` === `${player.playbackRate}`
    )?.label;
  }, [player.playbackRate, speedOptions]);

  return (
    <>
      {recording && (
        <Markup
          className={className}
          src={recording.filePath}
          type={recording.type}
          playing={player.playing}
          voiceTypesOptions={voiceTypesOptions}
          instrumentsOptions={instrumentsOptions}
          recordingId={recording.id}
          repeatOne={player.repeatOne}
          speedOptions={speedOptions}
          playbackRate={player.playbackRate}
          playbackRateLabel={playbackRateLabel}
          onMainButtonClick={onClick}
          onSkipPreviousClick={onSkipPreviousClick}
          onRepeatOneClick={onRepeatOneClick}
          onChangePlaybackRate={onChangePlaybackRate}
        />
      )}
    </>
  );
}
