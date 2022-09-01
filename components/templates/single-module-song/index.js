import Head from "next/head";
import { useEffect } from "react";

import Markup from "./markup.jsx";

import { usePlayerContext } from "../../../contexts/playerContext";

import config from "../../../config";

export default function SingleModuleSong({ module, song, pathname, description }) {
  const { skills } = module;

  const { setSong, playerContextState } = usePlayerContext();

  useEffect(() => {
    if (!playerContextState.song) {
      setSong({ recording: song.recordings[0], song });
    }
  }, [setSong, playerContextState, song]);

  console.log(module.title);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://vaccaj.app/${pathname}`} />
        <title>
          {song.title} | {module.title} | {config.siteTitle}
        </title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <Markup
        title={`${song.title} - ${song.beginning} | ${config.siteTitle}`}
        moduleTitle={`${module.title}`}
        h1={`${song.title} - ${song.beginning}`}
        skills={skills}
        song={playerContextState.song}
        module={module}
      />
    </>
  );
}
