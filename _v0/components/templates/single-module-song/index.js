import { useEffect, useState } from "react";

import SkillsList from "../../organisms/skills-list";
import Guides from "../../organisms/guides";
import Player from "../../organisms/player";
import Navbar from "../../organisms/navbar";

import styles from "./styles.module.scss";

import { usePlayerContext } from "../../../contexts/playerContext";

export default function SingleModuleSong({ module, song }) {
  const { skills } = module;

  const { setSong, playerContextState } = usePlayerContext();

  const [vh, setVh] = useState();
  const [vw, setVw] = useState();

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
    <div style={{ height: vh }} className={styles.grid}>
      <Navbar />
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
            <div className={styles.moduleHead}>
              <span className={styles.moduleTitle}>{module.title}</span>
              <img className={styles.moduleImage} src={module.backgroundImageUrl} alt="" />
            </div>
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
  );
}
