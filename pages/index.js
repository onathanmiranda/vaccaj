import SkillsList from "../components/organisms/skillsList";
import Player from "../components/organisms/player";
import Lyrics from "../components/organisms/lyrics";

import styles from "./style/index.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <SkillsList />
          <Lyrics />
        </section>
        <section className={styles.player}>
          <Player />
        </section>
      </main>
    </>
  );
}
