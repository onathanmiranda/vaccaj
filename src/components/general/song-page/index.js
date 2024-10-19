'use client';

import { useCallback, useContext, useMemo, useState } from "react";

import { H1 } from "@/components/atoms/headings";
import P from "@/components/atoms/p";
import { PlayerContext } from "@/context/player";

export default function SongPage({ song }) {
  const { state: playerState } = useContext(PlayerContext);
  const [imageZoomed, setImageZoomed] = useState(false);

  const songInstructions = useMemo(() => {
    return song.instructions.split('\\n');
  }, [song.instructions]);

  const sheetOnClick = useCallback(() => {
    setImageZoomed(oldState => !oldState);
  }, [setImageZoomed]);

  return (
    <section className=" pb-36 h-full overflow-y-scroll">
      <div className="max-w-screen-sm mx-auto mt-4 px-6 lg:px-0">
        <H1>{song.title}</H1>
        {song.beginning && song.beginning !== "null" && <P>{song.beginning}</P>}
      </div>
      {playerState.sheet && <>
        <P className="text-zinc-400 text-left max-w-screen-lg mb-2 ml-6 lg:ml-auto lg:mx-auto text-xs mt-4">Clique para {imageZoomed ? "diminuir" : "aumentar"}</P>
        <figure 
          onClick={sheetOnClick} 
          className={`cursor-pointer ${imageZoomed ? "overflow-x-scroll lg:overflow-hidden" : ""} w-full`}
        >
          <div className="origin-center-top animate-scale-up-down">
            {playerState.sheet.image_files.map((file) => {
              return <img  className={`transition-all duration-1000 max-w-none ${imageZoomed ? "w-[200vw] lg:w-full" : "w-full lg:w-[1024px]"} lg:mx-auto`} key={file.path} src={file.path} />
            })}
          </div>
        </figure>
      </>}
      <div className="mt-8 max-w-screen-sm mx-auto mt-8 px-6 lg:px-0">
        {songInstructions.map((paragraph, i) => {
          if(paragraph === String()) return;
          return <P className={`${i > 0 ? "mt-4" : "mt-8"} normal-case`} key={paragraph}>{paragraph}</P>
        })}
      </div>
    </section>
  );
}
