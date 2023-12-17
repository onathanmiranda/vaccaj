'use client';

import { textBody } from '../../../components/styles';

export default function Song({ song, modulo, skill, lesson }){
  const { title, beginning, instructions } = song;

  /* const pathname = usePathname();
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
  ); */

  
  return (
    <main className="mt-34 px-21">
      {skill.title && <div className="text-base lowercase font-normal">{skill.title}</div>}
      {lesson.title && <div className="text-base text-highlight lowercase font-light mt-13">{lesson.title}</div>}
      {title && <h1 className="text-2xl lowercase font-normal mt-13">{title}</h1>}
      {beginning && <p className="text-xl text-brand lowercase font-normal mb-34">{beginning}</p>}
      {instructions && 
      <section className='mb-233'>
        {instructions.split(`\n`).map((paragraph, index) => {
          return <p className={`mt-13 ${textBody}`} key={paragraph}>{paragraph}</p>
        })}
      </section>
      }
    </main>
  )
}