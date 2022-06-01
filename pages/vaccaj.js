import Head from "next/head";

import { useLessonsContext } from "../contexts/lessonsContext";

import SkillsList from "../components/organisms/skillsList";
import Guides from "../components/organisms/guides";

import styles from "./index.module.scss";

import config from "../config";

const pagesConfig = {
  moduleId: 2,
};

export default function Vaccaj() {
  const { reducedData } = useLessonsContext();

  const module = reducedData.find(({ id }) => id === pagesConfig.moduleId);

  const { skills } = module;

  return (
    <>
      <Head>
        <title>Método Vaccaj | {config.siteTitle}</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <SkillsList skills={skills} />
          <Guides />
        </section>
      </main>
    </>
  );
}
