import Head from "next/head";

import { useLessonsContext } from "../contexts/lessonsContext";

import SkillsList from "../components/organisms/skillsList";

import styles from "./index.module.scss";

import config from "../config";

const pagesConfig = {
  moduleId: 1,
};

export default function Vaccaj() {
  const { reducedData } = useLessonsContext();

  const module = reducedData.find(({ id }) => id === pagesConfig.moduleId);

  const { skills } = module;

  return (
    <>
      <Head>
        <title>Aquecimentos | {config.siteTitle}</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <SkillsList skills={skills} />
        </section>
      </main>
    </>
  );
}
