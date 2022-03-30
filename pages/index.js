import Head from "next/head";

import LessonsList from "../components/organisms/lessonsList";
import Player from "../components/organisms/player";

import styles from "./style/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaccaj - Método Prático</title>
        <meta
          name="description"
          content="Acesse as músicas do método Vaccaj de maneira simplificada."
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
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
