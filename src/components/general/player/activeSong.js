'use client';
import { useContext, useState, useEffect, useMemo } from "react";
import { PlayerContext } from "@/context/player";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function ActiveSong(){
  const { state: playerState } = useContext(PlayerContext);
  const { song, modulo } = playerState;

  const selectedLayoutSegments = useSelectedLayoutSegments();
  const [, , songSegment] = selectedLayoutSegments;

  const [titleBeginningSwap, setTitleBeginningSwap] = useState(false);
  
  const moduloListingName = useMemo(() => {
    const lastLetter = modulo.short_title.charAt(modulo.short_title.length - 1);
    if(lastLetter === 's') {
      return modulo.short_title.toLowerCase();
    } else {
      return (modulo.short_title + 's').toLowerCase();
    }
  }, [modulo.short_title]);

  useEffect(() => {
    if(!song?.beginning) return;
    const intervalId = setInterval(() => {
      setTitleBeginningSwap((i) => !i);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    }
  }, [song]);

  if(!song || !modulo) return null;

  console.log(song);

  return (
    <aside 
      className={`bg-gradient ${playerState.playing ? 'motion-safe:bg-gradient-animate' : ''} group bg-zinc-950 h-8`}>
      <div className={`text-zinc-50 px-6 h-full flex justify-between items-center gap-2 mx-auto max-w-screen-lg transition-[height] duration-500`}>
        <div className="shrink grow h-full">
          <p className="leading-none text-sm truncate w-full h-full flex items-center">
            <>
              {!titleBeginningSwap && <span>{song.title}</span>}
              {(song.beginning && song.beginning !== "null" && titleBeginningSwap) &&
                <span className="block italic font-thin">
                  {song.beginning}
                </span>
              }
            </>
          </p>
        </div>
        <Link href={songSegment ? modulo.url : song.url} className="transition-colors duration-500 text-zinc-300 text-sm leading-none shrink-0 h-8 flex items-center" >{songSegment ? `ver lista de ${moduloListingName}` : "ver instruções"}</Link>
      </div>
    </aside>
  );
}