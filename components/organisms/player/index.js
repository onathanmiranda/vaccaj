import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";

import Markup from "./markup";

export default function Player({ className }) {
  const [repeatOne, setRepeatOne] = useState(false);
  const { playerContextState, play, load, pause, changeSongRecording } =
    usePlayerContext();

  const { recording, player, song } = playerContextState;

  const playerRef = useRef();

  const onClick = useCallback(() => {
    if (player.playing) return pause(playerRef.current);
    if (!player.playing) return play(playerRef.current);
  }, [pause, play, player.playing]);

  const onSkipPreviousClick = useCallback(() => {
    load(playerRef.current);
    play(playerRef.current);
  }, [pause, play]);

  const onRepeatOneClick = useCallback(
    (e) => {
      e.target.blur();
      setRepeatOne((prev) => !prev);
    },
    [setRepeatOne]
  );

  const onTrackEnded = useCallback(() => {
    if (repeatOne) {
      load(playerRef.current);
      play(playerRef.current);
    } else {
      load(playerRef.current);
      pause(playerRef.current);
    }
  }, [load, pause, play, repeatOne]);

  const { voiceTypesOptions, instrumentsOptions } = useMemo(() => {
    if (!song) return [];
    if (!song.voiceTypesOptions) return [];

    return {
      voiceTypesOptions: song.voiceTypesOptions.map((option) => ({
        label: option.voiceType.title,
        value: option.recordings[0].id,
        onChange: () => {
          changeSongRecording({ recording: option.recordings[0] });
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
              changeSongRecording({ recording: _recording });
            },
            name: "instruments",
            checked: recording.id === _recording.id,
          };
        });

        return [...acc, ...options];
      }, []),
    };
  }, [song, recording, changeSongRecording]);

  useEffect(() => {
    if (!recording) return;
    load(playerRef.current);
    play(playerRef.current);
  }, [recording, load, play]);

  return (
    <>
      {recording && (
        <Markup
          className={className}
          ref={playerRef}
          src={recording.filePath}
          type={recording.type}
          playing={player.playing}
          voiceTypesOptions={voiceTypesOptions}
          instrumentsOptions={instrumentsOptions}
          recordingId={recording.id}
          repeatOne={repeatOne}
          onMainButtonClick={onClick}
          onSkipPreviousClick={onSkipPreviousClick}
          onRepeatOneClick={onRepeatOneClick}
          onEnded={onTrackEnded}
        />
      )}
    </>
  );
}
