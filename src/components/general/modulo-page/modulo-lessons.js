'use client';

import SongLink from "./song-link";

export default function ModuloLessons({ lessons, className }) {
  return (
    <section className={className}>
      {lessons.map((lesson) => {
        return (
          <div key={JSON.stringify(lesson)} className="mt-8">
            <header className="flex items-center gap-2">
              <h2 className="text-xs text-gray-400">
                {lesson.title}
              </h2>
              <p className=" text-slate-600 leading-none flex items-center text-xs lowercase rounded-full">
                #{lesson.skill.title}
              </p>
            </header>
            <ul className="mt-2 mx-w-none lg:max-w-xs">
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
