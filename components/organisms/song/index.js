'use client';
import { useMemo, useContext } from 'react';

import SongInstructions from '../../molecules/song-instructions';
import SongHeader from '../../molecules/song-header';

import { PlayerContext } from "../../../contexts/playerContext";
import SongSheet from '../../molecules/song-sheets';

export default function Song({ skill, lesson }){
  const { state } = useContext(PlayerContext);
  const { modulo, song, recording } = state || {};
  
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
      {recording && <SongSheet sheetURLs={recording.sheets?.filePaths} />}
      {instructions && <SongInstructions instructions={instructions} />}
    </main>
  )
}