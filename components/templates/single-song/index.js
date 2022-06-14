import Head from "next/head";
import { useEffect } from "react";

import Guides from "../../organisms/guides";

import { usePlayerContext } from "../../../contexts/playerContext";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function SingleModule({ song }) {
  const { title, beginning } = song;

  const { setSong, playerContextState, play } = usePlayerContext();

  useEffect(() => {
    if (!playerContextState.song) {
      setSong({ recording: song.recordings[0], song });
    }
  }, [setSong, playerContextState, song, play]);

  return (
    <>
      <Head>
        <title>
          {beginning} - {title} | {config.siteTitle}
        </title>
      </Head>
      <main className={styles.main}>
        <Guides song={playerContextState.song} />
      </main>
    </>
  );
}
