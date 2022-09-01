import Head from "next/head";
import { useEffect } from "react";

import Guides from "../../organisms/guides";

import { usePlayerContext } from "../../../contexts/playerContext";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function SingleModule({ song, description, pathname }) {
  const { title, beginning } = song;

  const { setSong, playerContextState } = usePlayerContext();

  useEffect(() => {
    if (!playerContextState.song) {
      setSong({ recording: song.recordings[0], song });
    }
  }, [setSong, playerContextState, song]);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://vaccaj.app/${pathname}`} />
        <title>
          {beginning} - {title} | {config.siteTitle}
        </title>
        <meta
        name="description"
          content={description}
        />
      </Head>
      <main className={styles.main}>
        <Guides song={playerContextState.song} />
      </main>
    </>
  );
}
