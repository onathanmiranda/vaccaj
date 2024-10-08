'use client';

import SongLink from "./song-link";

export default function ModuloLessons({ lessons, className }) {
  return (
    <section className={className}>
      {lessons.map((lesson, i) => {
        return (
          <div key={JSON.stringify(lesson)} className={`${ i > 0 ? 'mt-6' : ''}`}>
            <header className="flex items-center gap-2">
              <h2 className="text-xs text-zinc-400">
                {lesson.title}
              </h2>
              <p className=" text-zinc-600 leading-none flex items-center text-xs lowercase rounded-full">
                #{lesson.skill.title}
              </p>
            </header>
            <ul className="mt-1 mx-w-none lg:max-w-xs">
              {lesson.songs.map((song) => {
                return (
                  <li key={JSON.stringify(song)}>
                    <SongLink song={song} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
