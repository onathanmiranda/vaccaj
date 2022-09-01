import Head from "next/head";

import SkillsList from "../../organisms/skills-list";

import config from "../../../config";

import styles from "./styles.module.scss";

export default function SingleModule({ module, pathname }) {
  const { skills, about } = module;

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://vaccaj.app/${pathname}`} />
        <title>
          {module.title} | {config.siteTitle}
        </title>
        <meta
          name="description"
          content={about.substring(0, 259)}
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{module.title}</h1>
          {module.about &&
            module.about.split("\n").filter((about) => about !== "").map((about) => <p key={about}>{about}</p>)}
        </header>
        <section className={styles.lessons}>
          <SkillsList skills={skills} module={module} />
        </section>
      </main>
    </>
  );
}
