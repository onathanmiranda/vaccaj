'use client';

import {
  useState,
  useContext,
  createContext,
  useCallback,
  useRef,
  useEffect,
} from "react";

const initialState = {
  song: null
};

const SongContext = createContext(initialState);

export default function SongContextProvider({ children }) {
  const state = useState(initialState);

  return (
    <SongContext.Provider value={state}>
      {children}
    </SongContext.Provider>
  );
}

export const useSongContext = () => {
  const [ state, setState ] = useContext(PlayerContext);

  return {
    state
  };
};