'use client';
import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import CardSong from '../../molecules/card-song';

import { button, buttonActive, textBody } from '../../../components/styles';

export default function Modulo({ modulo }){
  const { title, about, skills } = modulo;
  const { intro } = about;

  const searchParams = useSearchParams();
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString();
    },
    [searchParams]
  );

  const skillsNavigationItems = useMemo(() => {
    if(skills.length < 2) return false;

    return [
      {
        id: "0",
        text: "todos",
        isActive: !searchParams.has('skill'),
        href: `/modulos/${modulo.slug}/`
      },
      ...skills.map(skill => {      
        const isActive = searchParams.has('skill') && searchParams.get('skill') === skill.id;
        
        return ({
          id: skill.id,
          text: skill.title,
          isActive,
          href: isActive ? `/modulos/${modulo.slug}/` : `/modulos/${modulo.slug}?${createQueryString('skill', skill.id)}`
        })
      })
    ];
  }, [skills, modulo, searchParams, createQueryString]);
  
  return (
    <main className={`mt-34 lg:mt-144 max-w-lg mx-auto`}>
      {title && <h1 className="text-2xl lowercase px-21 font-normal">{title}</h1>}

      {skillsNavigationItems && (
        <nav className="w-full overflow-x-scroll md:overflow-visible mt-34">
          <ul className='flex items-center md:justify-center py-8 w-auto md:w-full'>
            {skillsNavigationItems.map((item, index) => {
              const { text, isActive, id, href } = item;
              return (
                <li key={id} className={`${ index > 0 ? 'ml-8' : 'ml-21'}`}>
                  <Link href={href} className={`${isActive ? buttonActive : button}`}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {skills.map((skill) => {
        const render = !searchParams.has('skill') || searchParams.get('skill') === skill.id
        
        if(!render) return null;
        
        return (
          <div className="mt-55 px-21" key={skill.id}>
            <h2 className="text-base lowercase">{skill.title}</h2>
            {skill.lessons.map((lesson, index) => (
              <div className={`${index > 0 ? "mt-21" : "mt-13"}`} key={lesson.id}>
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

      {intro && <p className={`mt-89 mb-233 px-21 ${textBody}`}>{intro}</p>}
    </main>
  )
}