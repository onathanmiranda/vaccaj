"use client";

import { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { getModuloBySlug, getModuloSongBySlugOrId, getSongVoiceTypeOptionByVoiceTypeId } from "../../data";

function getCurrentPathState(moduloSlug, songSlug, voiceTypeId){
  const modulo = getModuloBySlug(moduloSlug);
  const song = getModuloSongBySlugOrId(songSlug, modulo);
  const { voiceType, recordings } = getSongVoiceTypeOptionByVoiceTypeId(song, voiceTypeId) || {};
  
  return { modulo, song, voiceType, recording: recordings ? recordings[0] : null };
}

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const params = useParams();
  const { moduloSlug, songSlug } = params;
  
  const searchParams = useSearchParams();
  const voiceTypeId = searchParams.get("voiceType");

  const [state, setState ] = useState(getCurrentPathState(moduloSlug, songSlug, voiceTypeId));
  
  useEffect(() => {
    const currentPathState = getCurrentPathState(moduloSlug, songSlug, voiceTypeId);
    
    setState((oldState) => ({
      ...oldState,
      modulo: currentPathState.modulo,
      song: currentPathState.song || oldState.song,
      recording: currentPathState.recording || oldState.recording,
      voiceType: currentPathState.voiceType || oldState.voiceType
    }));
  }, [setState, moduloSlug, songSlug, voiceTypeId]);

  return (
    <PlayerContext.Provider value={{ state }}>
      {children}
    </PlayerContext.Provider>
  );
}