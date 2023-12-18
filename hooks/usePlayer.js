import { useCallback, useContext } from "react";
import { PlayerContext } from "../contexts/playerContext";

export default function usePlayer(){
  const [ state, setState ] = useContext(PlayerContext);
  
  const setSong = useCallback((song) => {
    setState((oldState) => {
      return {
        ...oldState,
        song: song
      }
    });
  }, [setState]);

  return { 
    state,
    setSong
  }
}