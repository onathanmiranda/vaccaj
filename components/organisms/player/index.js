"use client";
import { useEffect, useState, useMemo } from "react";
import { useParams } from 'next/navigation';

import Song from '../../templates/song';

import usePlayer from "../../../hooks/usePlayer";
import { button, buttonActive } from '../../styles';

import { getModuleBySlug, getSongBySlugOrId, getSongSkillAndLessonFromModulo } from "../../../data";

export default function Player(){
  const params = useParams();
  const { state, setSong } = usePlayer();
  const { song } = state || {};
  const [ showInstructions, setShowInstructions ] = useState(false);

  const modulo = useMemo(() => {
    if(!params.moduleSlug) return;
    return getModuleBySlug(params.moduleSlug);
  }, [params]);

  const { skill, lesson } = useMemo(() => {
    if(!song || !modulo) return {};
    return getSongSkillAndLessonFromModulo(song, modulo);
  }, [song, modulo]) || {};

  useEffect(() => {
    if(!params.songSlugOrId) return setShowInstructions(false);
    const songFromUrl = getSongBySlugOrId(params.songSlugOrId);
    if(songFromUrl) {
      setSong(songFromUrl);
      setShowInstructions(true);
    }
  }, [params, setShowInstructions, setSong]);

  return (
    <>
      {song && 
        <section className="w-full fixed bottom-55">
          <div>
            <div className="bg-gradient-vaccaj flex justify-between items-center px-21 h-55">
              <div className="lowercase text-white">
                {song.title && <div className="text-base">{song.title}</div>}
                {song.beginning && <div className="text-sm">{song.beginning}</div>}
              </div>
              <button onClick={() => setShowInstructions((prev) => !prev)} className={`${showInstructions ? buttonActive : button}`}>instruções</button>
            </div>
            <div className={`transition-[height] duration-700 ${showInstructions ? "h-[calc(100svh-55px-55px-34px)]" : "h-0"} overflow-y-scroll backdrop-blur-2xl backdrop-brightness-100`}>
              <Song song={song} modulo={modulo} skill={skill} lesson={lesson} />
            </div>
          </div>
        </section>
      }
    </>
  );
}