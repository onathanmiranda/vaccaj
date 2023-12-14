'use client';
import { useState } from "react";
import { button, buttonActive } from '../../../components/styles';

export default function Modulo({ modulo }){
  const [ skillFilter, setSkillFilter ] = useState();
  const { title, about, skills } = modulo;
  const { intro } = about;

  const skillsNavigationItems = skills.length > 1 ? skills.map((skill) => ({
    id: skill.id,
    text: skill.title,
    isActive: skillFilter === skill.id
  })) : false;
  
  return (
    <main className="px-21">
      {title && <h1 className="text-2xl lowercase">{title}</h1>}

      {skillsNavigationItems && (
        <nav className="w-full overflow-x-scroll md:overflow-hidden mt-34">
          <ul className='flex items-center md:justify-center h-55 w-auto md:w-full'>
            {skillsNavigationItems.map(({ text, isActive, id }) => (
              <li key={id}>
                <button onClick={() => setSkillFilter(isActive ? null : id)} className={`${isActive ? buttonActive : button} ml-8`}>{text}</button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {intro && <p className="mt-21">{intro}</p>}
    </main>
  )
}