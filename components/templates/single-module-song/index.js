import { useEffect } from "react";
import Markup from "./markup.jsx";

import { usePlayerContext } from "../../../contexts/playerContext";

import config from "../../../config";

export default function SingleModuleSong({ module, song }) {
  const { skills } = module;

  const { setSong, playerContextState } = usePlayerContext();

  useEffect(() => {
    if (!playerContextState.song) {
      setSong({ recording: song.recordings[0], song });
    }
  }, [setSong, playerContextState, song]);

  return (
    <Markup
      title={`${song.title} - ${song.beginning} | ${config.siteTitle}`}
      moduleTitle={`${module.title}`}
      h1={`${song.title} - ${song.beginning}`}
      skills={skills}
      song={playerContextState.song}
      module={module}
    />
  );
}
