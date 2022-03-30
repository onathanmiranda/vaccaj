import {
  useState,
  useContext,
  createContext,
  useCallback,
  createRef,
} from "react";

const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const state = useState({
    player: {
      playing: false,
    },
    file: false,
  });

  return (
    <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  const [playerContextState, setPlayerContextState] = useContext(PlayerContext);

  const setRecording = useCallback(
    ({ type, filePath }) => {
      if (!type || !filePath) {
        console.error("setReconding is missing params");
        return;
      }
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          file: {
            type,
            filePath,
          },
        };
      });
    },
    [setPlayerContextState]
  );

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
  });

  return { playerContextState, setRecording, play, pause, load };
};
