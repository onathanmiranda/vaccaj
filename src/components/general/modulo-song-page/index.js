'use client';
import SongPage from "../song-page";
import ModuloPage from "../modulo-page";
import { PlayerContext } from "@/context/player";
import { useContext, useState, useEffect } from "react";

export default function ModuloSongPage({ modulo, song }){
  const [hideSong, setHideSong] = useState(false);
  const [titleBeginningSwap, setTitleBeginningSwap] = useState(false);
  const { setModuloAndSong, state: playerState } = useContext(PlayerContext);

  const moduloListingName = (() => {
    const lastLetter = modulo.short_title.charAt(modulo.short_title.length - 1);
    if(lastLetter === 's') {
      return modulo.short_title.toLowerCase();
    } else {
      return (modulo.short_title + 's').toLowerCase();
    }
  })();

  useEffect(() => {
    if(!song) return;
    setHideSong(true);
  }, [song]);

  useEffect(() => {
    if(!song) return;
    if(song?.id === playerState?.song?.id) return;
    setModuloAndSong(song, modulo);
  }, [song, setModuloAndSong, playerState, modulo]);

  useEffect(() => {
    if(!playerState.song.beginning) return;
    const intervalId = setInterval(() => {
      setTitleBeginningSwap((i) => !i);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    }
  }, [playerState.song]);

  return (
    <div className="h-full flex flex-col">
      <div className={`${!hideSong ? 'h-full' : 'h-0'} overflow-hidden transition-all duration-1000`}>
        <ModuloPage modulo={modulo} />
      </div>
      {playerState.song && (
        <div className={`${hideSong ? 'h-full flex flex-col' : 'h-8 shrink-0'} overflow-hidden transition-all duration-1000`}>
          <header 
            onClick={() => setHideSong((oldState) => !oldState)} 
            className={`bg-gradient ${playerState.playing ? 'motion-safe:bg-gradient-animate' : ''} group bg-zinc-950 hover:cursor-pointer h-8`}>
            <div className={`text-zinc-50 px-6 h-full flex justify-between items-center gap-2 mx-auto max-w-screen-lg transition-[height] duration-500`}>
              <div className="shrink grow h-full">
                {!hideSong && 
                <p className="leading-none text-sm truncate w-full h-full flex items-center">
                  <>
                    {!titleBeginningSwap && <span>{playerState.song.title}</span>}
                    {(playerState.song.beginning && playerState.song.beginning !== "null" && titleBeginningSwap) &&
                      <span className="block italic font-thin">
                        {playerState.song.beginning}
                      </span>
                    }
                  </>
                </p>}
              </div>
              <button className="transition-colors duration-500 text-zinc-300 text-sm leading-none shrink-0 h-8" >{hideSong ? `ver lista de ${moduloListingName}` : "ver instruções"}</button>
            </div>
          </header>
          <SongPage song={song || playerState.song} />
        </div>
      )}
    </div>
  )
}