'use client';

import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { H1 } from "@/components/atoms/headings";
import P from "@/components/atoms/p";
import { PlayerContext } from "@/context/player";

const lyricPreferenceLocalStorageKey = 'prefersLyrics';

export default function SongPage({ song, className = "" }) {
  const { state: playerState } = useContext(PlayerContext);
  const [prefersLyrics, setPrefersLyrics] = useState(false);
  const [imageZoomed, setImageZoomed] = useState(false);

  const songInstructions = useMemo(() => {
    return song.instructions.split('\\n');
  }, [song.instructions]);

  const hasLyrics = song.lyrics && song.lyrics !== "null";

  const toggleLyrics = useCallback((e) => {
    const showLyrics = Boolean(Number(e.currentTarget.value));
    setPrefersLyrics(showLyrics);
    if(showLyrics){
      localStorage.setItem(lyricPreferenceLocalStorageKey, 1);
    } else {
      localStorage.removeItem(lyricPreferenceLocalStorageKey);
    }
  }, []);

  const sheetOnClick = useCallback(() => {
    setImageZoomed(oldState => !oldState);
  }, [setImageZoomed]);

  useEffect(() => {
    if(hasLyrics){
      setPrefersLyrics(localStorage.getItem(lyricPreferenceLocalStorageKey))
    }
  }, [hasLyrics]);

  return (
    <section className={`py-12 h-full overflow-y-scroll ${className}`}>
      <div className="max-w-screen-sm mx-auto px-6 lg:px-0">
        <H1>{song.title}</H1>
        {song.beginning && song.beginning !== "null" && <P className="italic">{song.beginning}</P>}
      </div>
      <div>
        {hasLyrics && playerState.sheet && 
          <div className="max-w-screen-sm mx-auto px-6 lg:px-0 mt-4 flex text-sm justify-end items-center gap-4">
            <button onClick={toggleLyrics} value="0" className={`${!prefersLyrics ? 'text-zinc-50 pointer-events-none' : 'text-zinc-600'} hover:text-zinc-300`}>partitura</button>
            <button onClick={toggleLyrics} value="1" className={`${prefersLyrics ? 'text-zinc-50 pointer-events-none' : 'text-zinc-600'} hover:text-zinc-300`}>letra</button>
          </div>
        }
        {(playerState.sheet && !prefersLyrics) && <>
          <P className="text-zinc-400 text-left max-w-screen-lg mb-2 ml-6 lg:ml-auto lg:mx-auto text-xs mt-4">Clique para {imageZoomed ? "diminuir" : "aumentar"}</P>
          <figure 
            onClick={sheetOnClick} 
            className={`cursor-pointer ${imageZoomed ? "overflow-x-scroll lg:overflow-hidden" : ""} w-full`}
          >
            <div className="origin-center-top animate-scale-up-down">
              {playerState.sheet.image_files.map((file, index) => {
                const lyrics = song.lyrics ? song.lyrics.replace(/\\n/g, ';') : '';
                const imageFilesLength = playerState.sheet.image_files.length;
                return <img title={`${song.beginning ? `${song.beginning} | ` : ''}${song.title}${imageFilesLength ? ` - ${index + 1}` : ''}`} alt={lyrics} className={`transition-all duration-1000 max-w-none ${imageZoomed ? "w-[200vw] lg:w-full" : "w-full lg:w-[1024px]"} lg:mx-auto`} key={file.path} src={file.path} />
              })}
            </div>
          </figure>
        </>}
        {(hasLyrics && prefersLyrics) &&
          <div className="max-w-screen-sm mx-auto mt-8 px-6 lg:px-0">
            {song.lyrics.split('\\n').map((line, i) => {
              if(line === String()) return;
              return <P className={`${i > 0 ? "mt-1" : ""} normal-case italic`} key={line}>
                <span className="text-lg text-zinc-50">{line}</span>
              </P>
            })}
          </div>
        }
      </div>
      <div className="max-w-screen-sm mx-auto mt-8 px-6 lg:px-0">
        {songInstructions.map((paragraph, i) => {
          if(paragraph === String()) return;
          return <P className={`${i > 0 ? "mt-4" : "mt-8"} normal-case`} key={paragraph}>{paragraph}</P>
        })}
      </div>
    </section>
  );
}
