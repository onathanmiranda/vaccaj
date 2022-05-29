import { useMemo, useCallback } from "react";

import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SongCard({ song, className }) {
  const { beginning, title, recordings, id } = song;

  const { setSong, clearPlayer, playerContextState } = usePlayerContext();

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
      if (!isCurrentlySelected || !isPlaying)
        return setSong({ recording, song });
      return clearPlayer();
    },
    [isCurrentlySelected, isPlaying, setSong, clearPlayer, song]
  );

  return (
    <Markup
      onClick={onClick}
      partialLyric={beginning}
      title={title}
      className={className}
      recordings={recordings}
      isSelected={isCurrentlySelected}
      isPlaying={isPlaying}
    />
  );
}
