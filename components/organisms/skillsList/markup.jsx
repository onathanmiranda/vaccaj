import SongCard from "../../molecules/songCard";

import styles from "./styles.module.scss";

export default function LessonsList({ skills, disablePointerEvents }) {
  const pointerEventsClassName = disablePointerEvents
    ? styles.pointerEventsDisabled
    : "";

  return (
    <section className={`${styles.wrapper} ${pointerEventsClassName}`}>
      {skills.map(({ title, id, lessons }) => {
        return (
          <div key={id} className={styles.skill}>
            <h2 className={styles.skillTitle}>{title}</h2>
            {lessons.map(({ title, songs, id }) => {
              return (
                <div className={styles.lesson} key={id}>
                  {title && <h3 className={styles.lessonTitle}>{title}</h3>}
                  {songs.map((song) => (
                    <SongCard
                      key={song.id}
                      song={song}
                      className={styles.songCard}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
