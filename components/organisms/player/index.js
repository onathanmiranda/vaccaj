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

  const onRepeatOneClick = useCallback(() => {
    setRepeatOne((prev) => !prev);
  }, [setRepeatOne]);

  const onTrackEnd = useCallback(() => {
    if (repeatOne) {
      load(playerRef.current);
      play(playerRef.current);
    } else {
      load(playerRef.current);
      pause(playerRef.current);
    }
  }, [load, pause, play, repeatOne]);

  const recordingsOptions = useMemo(() => {
    if (!song) return [];
    return song.recordings
      .filter(({ voiceType }) => Boolean(voiceType))
      .map((recordingObj) => ({
        label: recordingObj.voiceType.title,
        value: recordingObj.id,
        onChange: () => {
          changeSongRecording({ recording: recordingObj });
        },
        name: "voicetype",
        checked: recordingObj.id === recording.id,
      }));
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
          recordingsOptions={recordingsOptions}
          recordingId={recording.id}
          repeatOne={repeatOne}
          onMainButtonClick={onClick}
          onSkipPreviousClick={onSkipPreviousClick}
          onRepeatOneClick={onRepeatOneClick}
          onEnded={onTrackEnd}
        />
      )}
    </>
  );
}
