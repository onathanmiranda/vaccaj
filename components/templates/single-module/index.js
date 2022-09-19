import { useEffect, useState } from "react";
import Head from "next/head";

import SkillsList from "../../organisms/skills-list";
import Player from "../../organisms/player";
import Menu from "../../organisms/menu";
import InstallPrompt from "../../organisms/install-prompt";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function SingleModule({ module, pathname }) {
  const [vh, setVh] = useState();

  const { skills, about } = module;

  useEffect(() => {
    if(typeof window === "undefined") return;
    const onResize = () => {
      setVh(window.innerHeight);
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [setVh]);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://vaccaj.app/${pathname}`} />
        <title>
          {module.title} | {config.siteTitle}
        </title>
        <meta
          name="description"
          content={about.intro.substring(0, 259)}
        />
      </Head>
      <div style={{ height: vh }} className={styles.grid}>
        <header className={styles.header}>
          <InstallPrompt />
          <Menu />
        </header>
        <main className={styles.main}>
          <header className={styles.hero}>
            <h1>{module.title}</h1>
            {module.about?.intro &&
              module.about.intro.split("\n").filter((about) => about !== "").map((about) => <p key={about}>{about}</p>)}
            {module.about?.sections && 
              module.about.sections.map((section) => (
                <details key={section.title} className={styles.details}>
                  <summary>{section.title}</summary>
                  {section.content.map((content) => {
                    if(content.type === "paragraph") return <p key={content.text}>{content.text}</p>;
                    if(content.type === "title") return <h3 key={content.text}>{content.text}</h3>;
                    if(content.type === "image") return <img key={content.sourceUrl} src={content.sourceUrl} alt="" />;
                    return null;
                  })}
                </details>
              ))
            }
          </header>
          <section className={styles.lessons}>
            <SkillsList skills={skills} module={module} />
          </section>
        </main>
        <section className={styles.player}>
          <Player />
        </section>
      </div>
    </>
  );
}
