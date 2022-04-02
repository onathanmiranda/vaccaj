import React, { useState, useContext, createContext } from "react";

import {
  voiceTypes,
  voiceTypeOrderById,
  speeds,
  recordings,
  songs,
  skills,
  lessons,
} from "./data";

function getItemById(itemId, collection) {
  return collection.find(({ id }) => id === itemId);
}

function reduceRecordingInfo({ id, filePath, voiceType, speedId, type }) {
  return {
    id,
    filePath,
    type,
    voiceType: getItemById(voiceType, voiceTypes),
    speed: getItemById(speedId, speeds),
  };
}

function reduceSongInfo({ id, title, beginning, recordingIds, lyrics }) {
  let song = {
    id,
    title,
    beginning,
    lyrics,
    recordings: recordingIds
      .map((id) => getItemById(id, recordings))
      .map(reduceRecordingInfo)
      .sort((a, b) => {
        const a_index = voiceTypeOrderById.findIndex(
          (i) => a.voiceType.id === i
        );
        const b_index = voiceTypeOrderById.findIndex(
          (i) => b.voiceType.id === i
        );
        return a_index - b_index;
      }),
  };

  song.speedOptions = song.recordings.reduce((acc, curr) => {
    let nextAcc = [...acc];
    const { speed } = curr;
    if (!acc.length) {
      nextAcc.push(speed);
      return nextAcc;
    }
    if (nextAcc.find(({ id }) => id === speed.id)) {
      return nextAcc;
    }
    nextAcc.push(speed);
    return nextAcc;
  }, []);

  return song;
}

function reduceLessonInfo({ id, title, skillId, songIds }) {
  return {
    id,
    title,
    skillId,
    songs: songIds.map((id) => getItemById(id, songs)).map(reduceSongInfo),
  };
}

const reducedData = skills.map(({ title, id }) => {
  return {
    title,
    id,
    lessons: lessons
      .filter(({ skillId }) => {
        return skillId === id;
      })
      .map(reduceLessonInfo),
  };
});

const LessonsContext = createContext();

export default function LessonsContextProvider({ children }) {
  const state = useState({
    speeds,
    voiceTypeOrderById,
    voiceTypes,
    recordings,
    songs,
    skills,
    lessons,
    reducedData,
  });
  return (
    <LessonsContext.Provider value={state}>{children}</LessonsContext.Provider>
  );
}

export const useLessonsContext = () => {
  const [LessonsContextState] = useContext(LessonsContext);
  return LessonsContextState;
};
