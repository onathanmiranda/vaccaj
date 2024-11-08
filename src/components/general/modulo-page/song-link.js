'use client';

import { useContext } from "react";
import Link from "next/link";

import { PlayerContext } from "@/context/player";
import Icon from "@/components/atoms/icon";

export default function SongLink({ song }) {
  const { state, pause, play } = useContext(PlayerContext);
  const isSongSelected = state.song?.id === song.id;
  return (
    <Link
      title={song.title}
      aria-label={song.title}
      onClick={(e) => {
        if(isSongSelected && state.playing){
          e.preventDefault();
          pause();
        } else if (isSongSelected) {
          play();
        }
      }}
      href={song.url}
      className={`rounded-full mt-1 inline-flex gap-1 items-center transition-colors duration-500 ${isSongSelected ? 'fill-purple-400 text-purple-400 hover:fill-purple-200 hover:text-purple-200 ' : 'text-zinc-400 fill-zinc-400 hover:fill-zinc-300 hover:text-zinc-300 '}`}
    >
      {state.playing && isSongSelected ? 
        <Icon.Pause className={`h-10 w-10`} /> 
          : <Icon.Play className={`h-10 w-10`} /> 
      }
      <div>
        <div className={`text-sm ${isSongSelected ? 'font-bold' : ''}`}>{song.title}</div>
        {(song.beginning && song.beginning !== "null") && (
          <div className={`font-thin text-xs italic ${isSongSelected ? 'fill-purple-200 text-purple-200 hover:fill-purple-100 hover:text-purple-100 ' : 'text-zinc-400 fill-zinc-400 hover:fill-zinc-300 hover:text-zinc-300 '} ${isSongSelected ? 'font-bold' : ''}`}>
            {song.beginning}
          </div>
        )}
      </div>
    </Link>
  );
}
