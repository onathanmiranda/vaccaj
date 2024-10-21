'use client';
import SongPage from "../song-page";
import ModuloPage from "../modulo-page";
import { PlayerContext } from "@/context/player";
import { useContext, useState, useEffect } from "react";

export default function ModuloSongPage({ modulo, song }){
  const [hideSong, setHideSong] = useState(false);
  const { setModuloAndSong, state: playerState } = useContext(PlayerContext);

  useEffect(() => {
    if(!song) return;
    setHideSong(true);
  }, [song]);

  useEffect(() => {
    if(!song) return;
    if(song?.id === playerState?.song?.id) return;
    setModuloAndSong(song, modulo);
  }, [song, setModuloAndSong, playerState]);

  return (
    <div className="h-full flex flex-col">
      <div className={`${!hideSong ? 'h-full' : 'h-0'} overflow-hidden transition-all duration-1000`}>
        <ModuloPage modulo={modulo} />
      </div>
      {playerState.song && (
        <div className={`${hideSong ? 'h-full flex flex-col' : 'h-12 shrink-0'} overflow-hidden transition-all duration-1000`}>
          <header onClick={() => setHideSong((oldState) => !oldState)} className={`group bg-zinc-950 hover:cursor-pointer ${hideSong ? 'h-8' : 'h-12'}`}>
            <div className={`text-zinc-50 px-6 h-full flex justify-between items-center mx-auto max-w-screen-lg transition-[height] duration-500`}>
              <div>
                {!hideSong && <h1 className="leading-none text-sm">
                  {playerState.song.title}{(playerState.song.beginning && playerState.song.beginning !== "null") && <div className="leading-none font-thin text-xs italic">{playerState.song.beginning}</div>}
                </h1>}
              </div>
              <button className="transition-colors duration-500 text-zinc-300 text-xs leading-none" >{hideSong ? "fechar instruções" : "ver instruções"}</button>
            </div>
          </header>
          <SongPage song={song || playerState.song} />
        </div>
      )}
    </div>
  )
}