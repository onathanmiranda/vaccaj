import Markup from "./markup";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SongCard({ song, className }) {
  const { beginning, title, recordings, speedOptions } = song;

  const { setRecording } = usePlayerContext();

  function onCLickPlay(recording) {
    setRecording({
      filePath: recording.filePath,
      type: recording.type,
    });
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
