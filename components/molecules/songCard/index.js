import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";
import { useGuidesContext } from "../../../contexts/guidesContext";

export default function SongCard({ song, className }) {
  const { beginning, title, recordings } = song;

  const { setSong } = usePlayerContext();
  const { setGuidesVisibility } = useGuidesContext();

  function onCLickPlay(recording) {
    setSong({ recording, song });
    setGuidesVisibility(true);
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
