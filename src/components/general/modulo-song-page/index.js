'use client';
import SongPage from "../song-page";
import ModuloPage from "../modulo-page";
import { PlayerContext } from "@/context/player";
import { useContext, useState, useEffect } from "react";

export default function ModuloSongPage({ modulo, song }){
  const [hideSong, setHideSong] = useState(false);
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

  return (
    <div className="h-full flex flex-col">
      <div className={`${!hideSong ? 'h-full' : 'h-0'} overflow-hidden transition-all duration-1000`}>
        <ModuloPage modulo={modulo} />
      </div>
      {playerState.song && (
        <div className={`${hideSong ? 'h-full flex flex-col' : 'h-12 shrink-0'} overflow-hidden transition-all duration-1000`}>
          <header 
            style={{
              background: `linear-gradient(135deg, rgba(80,0,150,1) 0%, rgba(130,0,200,1) 30%, rgba(200,0,255,1) 60%, rgba(160,0,180,1) 100%)`
            }} 
            onClick={() => setHideSong((oldState) => !oldState)} 
            className={`group bg-zinc-950 hover:cursor-pointer ${hideSong ? 'h-8' : 'h-12'}`}>
            <div className={`text-zinc-50 px-6 h-full flex justify-between items-center gap-2 mx-auto max-w-screen-lg transition-[height] duration-500`}>
              <div className="shrink w-1/2">
                {!hideSong && 
                <h1 className="leading-none text-base truncate w-full">
                  <span className="">{playerState.song.title}</span>
                  {(playerState.song.beginning && playerState.song.beginning !== "null") && <span className="block mt-1 leading-none font-thin text-xs italic">{playerState.song.beginning}</span>}
                </h1>}
              </div>
              <button className="transition-colors duration-500 text-zinc-300 text-sm leading-none shrink-0" >{hideSong ? `ver lista de ${moduloListingName}` : "ver instruções"}</button>
            </div>
          </header>
          <SongPage song={song || playerState.song} />
        </div>
      )}
    </div>
  )
}