import React, { useState, createContext } from "react";

export const InstallPromptContext = createContext();

export default function InstallPromptContextProvider({ children }) {
  const state = useState(false);

  return (
    <InstallPromptContext.Provider value={state}>{children}</InstallPromptContext.Provider>
  );
}
