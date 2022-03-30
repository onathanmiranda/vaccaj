import LessonsList from "../components/organisms/lessonsList";
import Player from "../components/organisms/player";

import styles from "./style/index.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <LessonsList />
        </section>
        <section className={styles.player}>
          <Player />
        </section>
      </main>
    </>
  );
}
