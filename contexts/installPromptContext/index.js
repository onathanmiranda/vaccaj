import React, { useState, createContext } from "react";

export const InstallPromptContext = createContext();

export default function InstallPromptContextProvider({ children }) {
  const state = useState(true);

  return (
    <InstallPromptContext.Provider value={state}>{children}</InstallPromptContext.Provider>
  );
}
