import React, { useState, useContext, createContext, useMemo } from "react";

import {
  voiceTypes,
  voiceTypeOrderById,
  speeds,
  recordings,
  songs,
  skills,
  lessons,
  modules,
} from "../../data/data";

import reducedData from "../../data";

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
