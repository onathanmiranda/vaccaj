import SongCard from "../../molecules/songCard";

import styles from "./styles.module.scss";

export default function LessonsList({ lessons }) {
  return (
    <section className={styles.wrapper}>
      {lessons.map(({ title, id, songs }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            {songs.map((song) => (
              <SongCard key={song.id} song={song} className={styles.songCard} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
