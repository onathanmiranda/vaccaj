import { useMemo } from "react";
import SongCard from "../../molecules/songCard";

import styles from "./styles.module.scss";

function SongCardWithProps({ song, module, minimal }) {
  return (
    <SongCard
      song={song}
      className={styles.songCard}
      moduleSlug={module.slug}
      songHref={`/modulos/${module.slug}/${song.slug || song.id}`}
      minimal={minimal}
    />
  );
}

function List({ skills, module, horizontal }) {
  return (
    <>
      {!horizontal &&
        skills.map(({ title, id, lessons }) => {
          return (
            <div key={id} className={styles.skill}>
              <h2 className={styles.skillTitle}>{title}</h2>
              {lessons.map(({ title, songs, id }) => {
                return (
                  <div className={styles.lesson} key={id}>
                    {title && <h3 className={styles.lessonTitle}>{title}</h3>}
                    {songs.map((song) => (
                      <SongCardWithProps
                        key={song.id}
                        song={song}
                        module={module}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      {horizontal &&
        skills.reduce((acc, skill) => {
          const componentList = [...acc];
          skill.lessons.forEach((lesson) => {
            lesson.songs.forEach((song) => {
              componentList.push(
                <SongCardWithProps
                  key={song.id}
                  module={module}
                  song={song}
                  minimal={true}
                />
              );
            });
          });

          return componentList;
        }, [])}
    </>
  );
}

export default function LessonsList({ skills, module, horizontal }) {
  const horizontalClassName = useMemo(
    () => (horizontal ? styles.horizontal : ""),
    [horizontal]
  );
  return (
    <nav className={`${styles.wrapper} ${horizontalClassName}`}>
      {horizontal && (
        <div className={styles.horizontalWrapper}>
          <List module={module} skills={skills} horizontal={horizontal} />
        </div>
      )}
      {!horizontal && (
        <List module={module} skills={skills} horizontal={horizontal} />
      )}
    </nav>
  );
}
