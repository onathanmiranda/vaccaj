import { useMemo, useCallback } from "react";

import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SongCard({
  song,
  className,
  songHref,
  minimal = false,
}) {
  const { beginning, title, recordings, id } = song;

  const { setSong, playerContextState, play, pause } = usePlayerContext();

  const currentSongId = playerContextState.song
    ? playerContextState.song.id
    : 0;

  const isCurrentlySelected = useMemo(() => {
    return currentSongId === id;
  }, [currentSongId, id]);

  const isPlaying = useMemo(() => {
    return isCurrentlySelected && playerContextState.player.playing;
  }, [isCurrentlySelected, playerContextState.player.playing]);

  const onClick = useCallback(
    (recording) => {
      if (!isCurrentlySelected || !isPlaying) {
        setSong({ recording, song });
        play();
        return;
      }

      pause();
    },
    [isCurrentlySelected, isPlaying, pause, setSong, song, play]
  );

  return (
    <Markup
      onClick={onClick}
      songHref={songHref}
      partialLyric={beginning}
      title={title}
      className={className}
      recordings={recordings}
      isSelected={isCurrentlySelected}
      isPlaying={isPlaying}
      minimal={minimal}
    />
  );
}
