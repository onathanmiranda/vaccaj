import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

import Menu from "../../organisms/menu";
import InstallPrompt from "../../organisms/install-prompt";
import SkillsList from "../../organisms/skills-list";
import Guides from "../../organisms/guides";
import Player from "../../organisms/player";

import styles from "./styles.module.scss";

import { usePlayerContext } from "../../../contexts/playerContext";

import config from "../../../config";

export default function SingleModuleSong({ module, song, pathname, description }) {
  const { skills } = module;

  const { setSong, playerContextState } = usePlayerContext();

  const [vh, setVh] = useState();
  const [vw, setVw] = useState();
  
  const titleSuffix = useMemo(() => {
    return module.title.toLowerCase() !== config.siteTitle.toLowerCase() ? `${module.title} | ${config.siteTitle}` : module.title
  }, [module.title]);

  useEffect(() => {
    if (!playerContextState.song) {
      setSong({ recording: song.recordings[0], song });
    }
  }, [setSong, playerContextState, song]);

  useEffect(() => {
    if(typeof window === "undefined") return;
    const onResize = () => {
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [setVh, setVw]);

  const h1Suffix = song.beginning ? ` - ${song.beginning}` : '';
  const h1 = song.title + h1Suffix;

  return (
    <>
      <Head>
        <title>
          {song.title} | {`${song.beginning ? `${song.beginning} |` : ''}`} {titleSuffix}
        </title>
        <link rel="canonical" href={`https://vaccaj.app/${pathname}`} />
        <meta
          name="description"
          content={description}
        />
      </Head>
      <div style={{ height: vh }} className={styles.grid}>
        <header className={styles.header}>
          <InstallPrompt />
          <Menu />
        </header>
        <main className={styles.main}>
          <aside className={styles.lessons}>
            <SkillsList
              module={module}
              skills={skills}
              horizontal={vw <= 900}
            />
          </aside>
          <section className={styles.guides}>
            <header className={styles.header}>
              <span className={styles.moduleTitle}>{module.title}</span>
              <h1 className={styles.songTitle}>{h1}</h1>
              {song.instructions &&
                song.instructions
                  .split("\n")
                  .map((line) => <p className={styles.instructions} key={line}>{line}</p>)}
            </header>
            <Guides song={playerContextState.song} />
          </section>
        </main>
        <section className={styles.player}>
          <Player />
        </section>
      </div>
    </>
  );
}
