import SongCard from "../../molecules/songCard";

import styles from "./styles.module.scss";

export default function LessonsList({ skills }) {
  return (
    <section className={styles.wrapper}>
      {skills.map(({ title, id, lessons }) => {
        return (
          <div key={id} className={styles.skill}>
            <h2 className={styles.skillTitle}>{title}</h2>
            {lessons.map(({ title, songs, id }) => {
              return (
                <div className={styles.lesson} key={id}>
                  <h3 className={styles.lessonTitle}>{title}</h3>
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
