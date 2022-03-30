import { useEffect, useRef } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";

import Markup from "./markup";

export default function Player({ className }) {
  const { playerContextState, play, pause, load } = usePlayerContext();
  const { file } = playerContextState;

  const playerRef = useRef();

  useEffect(() => {
    if (!file) return;
    const player = playerRef.current;
    load(player);
    play(player);
  }, [file, load, play]);

  return (
    <>
      {file && (
        <Markup
          className={className}
          ref={playerRef}
          src={file.filePath}
          type={file.type}
        />
      )}
    </>
  );
}
