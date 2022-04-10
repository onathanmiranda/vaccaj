import { useGuidesContext } from "../contexts/guidesContext";

import SkillsList from "../components/organisms/skillsList";
import Player from "../components/organisms/player";
import Guides from "../components/organisms/guides";

import styles from "./style/index.module.scss";

export default function Home() {
  const { guidesContextState } = useGuidesContext();

  const guidesShownClassName = guidesContextState.shown
    ? styles.guidesShown
    : "";

  return (
    <>
      <main className={`${styles.main} ${guidesShownClassName}`}>
        <section className={styles.lessons}>
          <SkillsList />
          <Guides />
        </section>
        <section className={styles.player}>
          <Player />
        </section>
      </main>
    </>
  );
}
