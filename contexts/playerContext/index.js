"use client";

import { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { getModuloBySlug, getModuloSongBySlugOrId } from "../../data";

function getCurrentPathState(moduloSlug, songSlug){
  const modulo = getModuloBySlug(moduloSlug);
  const song = getModuloSongBySlugOrId(songSlug, modulo);
  const recording = song?.voiceTypeOptions[0].recording;
  return { modulo, song, recording }
}

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const { moduloSlug, songSlug } = params;
  const { voiceType } = searchParams;

  const [state, setState ] = useState(getCurrentPathState(moduloSlug, songSlug));
  
  useEffect(() => {
    const currentPathState = getCurrentPathState(moduloSlug);

    setState((oldState) => ({
      ...oldState,
      modulo: currentPathState.modulo || oldState.modulo,
      song: currentPathState.song || oldState.song,
      recording: currentPathState.recording || oldState.recording
    }));
  }, [setState, moduloSlug]);

  return (
    <PlayerContext.Provider value={{ state }}>
      {children}
    </PlayerContext.Provider>
  );
}