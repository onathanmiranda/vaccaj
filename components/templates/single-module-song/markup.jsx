import Head from "next/head";
import { useEffect, useState, useMemo } from "react";

import SkillsList from "../../organisms/skills-list";
import Guides from "../../organisms/guides";

import styles from "./styles.module.scss";

export default function Markup({
  title,
  h1,
  module,
  skills,
  song,
  moduleTitle,
}) {
  const [windowInnerWidth, setWindowInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const skillListHorizontal = useMemo(
    () => windowInnerWidth < 950,
    [windowInnerWidth]
  );

  useEffect(() => {
    let callback;
    if (typeof window !== "undefined") {
      callback = () => setWindowInnerWidth(window.innerWidth);
      window.addEventListener("resize", callback);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", callback);
      }
    };
  }, [setWindowInnerWidth]);

  return (
    <>
      <Head>{title && <title>{title}</title>}</Head>
      <main className={styles.main}>
        <aside className={styles.lessons}>
          <SkillsList
            module={module}
            skills={skills}
            horizontal={skillListHorizontal}
          />
        </aside>
        <section className={styles.guides}>
          <header className={styles.header}>
            {moduleTitle && (
              <span className={styles.moduleTitle}>{moduleTitle}</span>
            )}
            {h1 && <h1 className={styles.songTitle}>{h1}</h1>}
          </header>
          <Guides song={song} />
        </section>
      </main>
    </>
  );
}
