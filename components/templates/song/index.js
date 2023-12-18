'use client';
import { useMemo } from 'react';

import SongInstructions from '../../molecules/song-instructions';
import SongHeader from '../../molecules/song-header';

export default function Song({ song, modulo, skill, lesson }){

  const { title, beginning, instructions } = song;

  const headerProps = useMemo(() => {
    return (title || beginning || skill.title || lesson.title) ? {
      skillTitle: skill?.title,
      lessonTitle: lesson?.title,
      songTitle: title,
      songBeginning: beginning
    } : false;
  }, [title, beginning, skill, lesson]);

  return (
    <main>
      {headerProps && <SongHeader { ...headerProps } />}
      {instructions && <SongInstructions instructions={instructions} />}
    </main>
  )
}