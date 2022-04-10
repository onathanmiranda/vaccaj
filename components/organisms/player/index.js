import { useEffect, useRef, useCallback } from "react";
import { usePlayerContext } from "../../../contexts/playerContext";
import { useGuidesContext } from "../../../contexts/guidesContext";

import Markup from "./markup";

export default function Player({ className }) {
  const { playerContextState, play, load, clearPlayer } = usePlayerContext();
  const { setGuidesVisibility } = useGuidesContext();
  const { file } = playerContextState;

  const playerRef = useRef();

  const onCancel = useCallback(() => {
    clearPlayer();
    setGuidesVisibility(false);
  }, [clearPlayer, setGuidesVisibility]);

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
          onCancel={onCancel}
        />
      )}
    </>
  );
}
