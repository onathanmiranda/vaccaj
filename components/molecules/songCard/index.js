import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SongCard({ song, className }) {
  const { beginning, title, recordings } = song;

  const { setSong } = usePlayerContext();

  function onCLickPlay(recording) {
    setSong({ recording, song });
  }

  return (
    <Markup
      onCLickPlay={onCLickPlay}
      partialLyric={beginning}
      title={title}
      className={className}
      recordings={recordings}
    />
  );
}
