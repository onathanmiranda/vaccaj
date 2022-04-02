import { useState, useContext, createContext, useCallback } from "react";

const PlayerContext = createContext();

const initialState = {
  player: {
    playing: false,
  },
  file: false,
  song: false,
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
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          file: {
            type: recording.type,
            filePath: recording.filePath,
          },
          song: {
            lyrics: song.lyrics,
          },
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

  return { playerContextState, setSong, play, pause, load, clearPlayer };
};
