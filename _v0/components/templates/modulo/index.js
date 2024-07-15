'use client';
import { useContext } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { PlayerContext } from "../../../contexts/playerContext";
import CardSong from '../../molecules/card-song';

import { button, buttonActive, textBody } from '../../../components/styles';

export default function Modulo(){
  const { state } = useContext(PlayerContext);
  const { modulo } = state || {};
  
  const { title, about, skills } = modulo || {};
  const { intro } = about || {};

  const searchParams = useSearchParams();
  const currentSkillId = searchParams.get('skill');
  
  return (
    <main className={`mt-34 lg:mt-144 max-w-lg mx-auto`}>
      {title && <h1 className="text-2xl lowercase px-21 font-normal">{title}</h1>}

      {skills && skills.length > 1 && (
        <nav className="w-full overflow-x-scroll md:overflow-visible mt-34">
          <ul className='flex items-center py-8 w-auto md:w-full'>
            <li className='ml-8'>
              <Link href={modulo.href} className={`${!currentSkillId ? buttonActive : button}`}>todos</Link>
            </li>
            {skills.map((skill) => {
              const { title, id, href } = skill;
              const isActive = currentSkillId === id;
              return (
                <li key={id} className='ml-8'>
                  <Link href={href} className={`${isActive ? buttonActive : button}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {skills && skills.map((skill) => {
        const render = !searchParams.has('skill') || currentSkillId === skill.id;
        if(!render) return;
        return (
          <div className="mt-55 px-21" key={skill.id}>
            <h2 className="text-base lowercase">{skill.title}</h2>
            {skill.lessons.map((lesson, index) => (
              <div key={lesson.id} className={`${index > 0 ? "mt-21" : "mt-13"}`}>
                <h3 className="text-base lowercase font-light text-highlight">{lesson.title}</h3>
                <ul>
                  {lesson.songs.map((song) => {
                    return (
                      <li key={song.id}>
                        <CardSong song={song} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )
      })}

      {intro && <p className={`mt-89 mb-377 px-21 ${textBody}`}>{intro}</p>}
    </main>
  )
}