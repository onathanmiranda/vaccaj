import { useEffect, useState } from "react";

import SkillsList from "../../organisms/skills-list";
import Player from "../../organisms/player";
import Navbar from "../../organisms/navbar";

import styles from "./styles.module.scss";

export default function SingleModule({ module }) {
  const [vh, setVh] = useState();

  const { skills } = module;

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
    <div style={{ height: vh }} className={styles.grid}>
      <Navbar />
      <main className={`${styles.main}`}>
        <header className={styles.hero}>
          <h1>{module.title}</h1>
          <div className={styles.aboutText}>
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
          </div>
        </header>
        <section className={styles.lessons}>
          <SkillsList skills={skills} module={module} />
          <div className={styles.aboutText}>
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
          </div>
        </section>
      </main>
      <section className={styles.player}>
        <Player />
      </section>
    </div>
  );
}
