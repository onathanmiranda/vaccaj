"use client";
import { useContext, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import SongControls from '../../molecules/song-controls';
import Song from '../../organisms/song';

import { PlayerContext } from "../../../contexts/playerContext";

import { button, buttonActive } from '../../styles';

export default function Player(){
  const { state } = useContext(PlayerContext);
  const { song } = state || {};
  
  const searchParams = useSearchParams();
  const showInstructions = searchParams.has("instructions");

  const linkHref = useMemo(() => {
    if(!song) return "";

    const songURL = new URL(song.href);

    if(showInstructions){
      songURL.searchParams.delete('instructions')
    } else {
      songURL.searchParams.set('instructions', '');
    }

    if(searchParams.has('skill'))
      songURL.searchParams.set('skill', searchParams.get('skill'))

    return songURL.toString().replace('instructions=', 'instructions');
  }, [searchParams, showInstructions, song]);
  

  const showVoiceTypesOptions = song?.voiceTypeOptions.length > 1;

  return (
    <>
      {song && 
        <section className="w-full fixed bottom-55 lg:bottom-0">
          <div>
            <div className="bg-gradient-vaccaj px-21 h-55">
              <div className="flex h-full justify-between items-center max-w-lg mx-auto">
                <div className="lowercase text-white">
                  {song.title && <div className="text-base">{song.title}</div>}
                  {song.beginning && <div className="text-sm">{song.beginning}</div>}
                </div>
                <Link href={linkHref} className={`${showInstructions ? buttonActive : button}`}>instruções</Link>
              </div>
            </div>
            <div className={`motion-safe:transition-[height] motion-safe:duration-700 ${showInstructions ? `${showVoiceTypesOptions ? "h-[calc(100svh-272px)]" : "h-[calc(100svh-217px)]"} ${showVoiceTypesOptions ? "lg:h-[calc(100svh-238px)]" : "lg:h-[calc(100svh-183px)]"}` : "h-0"} overflow-y-scroll bg-white backdrop-blur-2xl backdrop-brightness-100`}>
              <Song />
            </div>
          </div>
          <SongControls />
        </section>
      }
    </>
  );
}