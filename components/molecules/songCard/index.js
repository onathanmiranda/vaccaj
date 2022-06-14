import { useRouter } from "next/router";

import { useMemo, useCallback } from "react";

import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SongCard({ song, className }) {
  const { beginning, title, recordings, id } = song;

  const router = useRouter();

  const { setSong, clearPlayer, playerContextState, play, load } =
    usePlayerContext();

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
      const pathname = song.slug ? song.slug : song.id;

      if (!isCurrentlySelected || !isPlaying) {
        setSong({ recording, song });
        play();
        router.push(`/musicas/${pathname}`, null, { shallow: true });
        return;
      }

      clearPlayer();
    },
    [song, isCurrentlySelected, isPlaying, clearPlayer, setSong, play, router]
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
