import Head from "next/head";

import SkillsList from "../../organisms/skills-list";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function SingleModule({ module }) {
  const { skills } = module;

  return (
    <>
      <Head>
        <title>
          {module.title} | {config.siteTitle}
        </title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{module.title}</h1>
          {module.about &&
            module.about.split("\n").map((about) => <p key={about}>{about}</p>)}
        </header>
        <section className={styles.lessons}>
          <SkillsList skills={skills} module={module} />
        </section>
      </main>
    </>
  );
}
