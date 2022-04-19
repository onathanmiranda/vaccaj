import React, { useState, useContext, createContext, useCallback } from "react";

import {
  voiceTypes,
  voiceTypeOrderById,
  speeds,
  recordings,
  songs,
  skills,
  lessons,
  sheets,
  modules,
} from "./data";

function getItemById(itemId, collection) {
  return collection.find(({ id }) => id === itemId);
}

function reduceRecordingInfo(recording, sheetsList) {
  const { id, filePath, voiceType, speedId, type } = recording;
  const sheets = sheetsList.find((item) => item.voiceTypes.includes(voiceType));

  return {
    id,
    filePath,
    type,
    voiceType: getItemById(voiceType, voiceTypes),
    speed: getItemById(speedId, speeds),
    sheets,
  };
}

function reduceSongInfo({
  id,
  title,
  beginning,
  recordingIds,
  lyrics,
  sheetsList,
}) {
  let _sheetsList = sheetsList.map((id) => getItemById(id, sheets));
  let song = {
    id,
    title,
    beginning,
    lyrics,
    recordings: recordingIds
      .map((id) => getItemById(id, recordings))
      .map((recording) => reduceRecordingInfo(recording, _sheetsList))
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

function joinSkillsAndLessons(skill, lessons) {
  const { title, id } = skill;
  return {
    title,
    id,
    lessons: lessons
      .filter(({ skillId }) => {
        return skillId === id;
      })
      .map(reduceLessonInfo),
  };
}

function getSkillsFromLessons(lessons, skills) {
  const skillsIds = lessons.reduce((acc, curr) => {
    if (acc.includes(curr.skillId)) return acc;
    acc.push(curr.skillId);
    return acc;
  }, []);
  return skillsIds.map((id) => getItemById(id, skills));
}

function reduceModuleInfo({ id, title, lessonsIds }) {
  const moduleLessons = lessonsIds.map((id) => getItemById(id, lessons));
  const modulesSkills = getSkillsFromLessons(moduleLessons, skills);

  return {
    id,
    title,
    skills: modulesSkills.map((skill) =>
      joinSkillsAndLessons(skill, moduleLessons)
    ),
  };
}

function reduceData(entrypoint, entryPointReducer) {
  return entrypoint.map(entryPointReducer);
}

const reducedData = reduceData(modules, reduceModuleInfo);

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
    modules,
    reducedData,
  });
  return (
    <LessonsContext.Provider value={state}>{children}</LessonsContext.Provider>
  );
}

export const useLessonsContext = () => {
  const [lessonsContextState] = useContext(LessonsContext);
  return lessonsContextState;
};
