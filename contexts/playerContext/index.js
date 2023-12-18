"use client"

import { createContext, useState } from "react";

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const state = useState();
  return (
    <PlayerContext.Provider value={state}>
      {children}
    </PlayerContext.Provider>
  );
}