import { useState, useContext, createContext, useCallback } from "react";

const PlayerContext = createContext();

const initialState = {
  player: {
    playing: false,
  },
  file: false,
  song: false,
  showGuides: false,
};

export default function PlayerContextProvider({ children }) {
  const state = useState(initialState);

  return (
    <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  const [playerContextState, setPlayerContextState] = useContext(PlayerContext);

  const setSong = useCallback(
    ({ recording, song }) => {
      if (!recording || !song) {
        console.error("setRecording is missing params");
        return;
      }
      const { type, filePath, sheets } = recording;
      const { lyrics, title } = song;

      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          file: {
            type,
            filePath,
          },
          song: {
            lyrics,
            title,
            sheets,
          },
          showGuides: Boolean(lyrics || sheets),
        };
      });
    },
    [setPlayerContextState]
  );

  const setGuidesVisibility = useCallback(
    (newGuideState) => {
      if (typeof newGuideState !== "boolean") return;
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          showGuides: newGuideState,
        };
      });
    },
    [setPlayerContextState]
  );

  const clearPlayer = useCallback(() => {
    setPlayerContextState(initialState);
  }, [setPlayerContextState]);

  const play = useCallback(
    (player) => {
      player.play();
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          player: {
            playing: true,
          },
        };
      });
    },
    [setPlayerContextState]
  );

  const pause = useCallback(
    (player) => {
      player.pause();
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          player: {
            playing: false,
          },
        };
      });
    },
    [setPlayerContextState]
  );

  const load = useCallback((player) => {
    player.load();
  }, []);

  return {
    playerContextState,
    setSong,
    play,
    pause,
    load,
    clearPlayer,
    setGuidesVisibility,
  };
};
