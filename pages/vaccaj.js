import { useLessonsContext } from "../contexts/lessonsContext";

import SkillsList from "../components/organisms/skillsList";
import Guides from "../components/organisms/guides";

import styles from "./style/index.module.scss";

const pagesConfig = {
  moduleId: 2,
};

export default function Vaccaj() {
  const { reducedData } = useLessonsContext();

  const module = reducedData.find(({ id }) => id === pagesConfig.moduleId);

  const { skills } = module;

  return (
    <>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <SkillsList skills={skills} />
          <Guides />
        </section>
      </main>
    </>
  );
}
