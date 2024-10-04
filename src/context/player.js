'use client';

import {
  useState,
  createContext,
  useCallback,
  useEffect,
  useRef
} from "react";

// Initial state for the context
const initialState = {};

// Creating the context for Player state
export const PlayerContext = createContext(initialState);

// Helper function to check if two arrays have at least one common value
function arraysHaveCommonValue(arr1, arr2) {
  const set1 = new Set(arr1);

  for (const item of arr2) {
    if (set1.has(item)) {
      return true;
    }
  }

  return false;
}

// The PlayerContextProvider component will manage the state and provide it to child components
export default function PlayerContextProvider({ children }) {
  // State for the player (song, recording, etc.)
  const [state, setState] = useState(initialState);

  const audioRef = useRef();

  /**
   * Function to set the current song and modulo in the state
   * This is used to initialize or change the song and modulo in the player
   */
  const setModuloAndSong = useCallback((song, modulo) => {
    if (!song) return;
    setState((oldState) => {
      return {
        ...oldState,
        song,
        modulo
      }
    });
  }, [setState]);

  /**
   * Function to change the current recording based on whether it has vocals or not
   * It finds a recording with matching vocals status (has_vocals) and voice type
   */
  const changeVocals = useCallback((hasVocals) => {
    if (!state.song) return;
    if (!state.recording) return;
    
    // Get the current recording's voice type IDs
    const stateRecordingVoiceTypesIds = state.recording.voice_types.map((voice_type) => voice_type.id);
    
    // Find a new recording with the same voice types and matching has_vocals status
    const recording = state.song.recordings.find((recording) => {
      const recordingVoiceVoiceTypesIds = recording.voice_types.map((voice_type) => voice_type.id);
      return recording.has_vocals === hasVocals && arraysHaveCommonValue(stateRecordingVoiceTypesIds, recordingVoiceVoiceTypesIds);
    });

    // If a matching recording is found, update the state
    if (recording) {
      setState((oldState) => ({
        ...oldState,
        recording
      }));
    }
  }, [state.song, state.recording]);

  /**
   * Function to change the current recording and sheet based on a specific voice type ID
   * It finds a recording and sheet that contains the selected voice type ID
   */
  const changeVoice = useCallback((id) => {
    if (!state.song) return;
    
    // Find a recording that has the selected voice type and matches the vocals and instruments status
    const recording = state.song.recordings.find((recording) => {
      return recording.voice_types.reduce((acc, voice_type) => {
        return (acc || (
          voice_type.id === id && (
            recording.has_vocals === state.recording.has_vocals && recording.has_instruments === state.recording.has_instruments
          )
        ));
      }, false);
    });

    // Find a sheet that has the selected voice type
    const sheet = state.song.sheets.find((sheet) => {
      return sheet.voice_types.reduce((acc, voice_type) => {
        return acc || voice_type.id === id;
      }, false);
    });

    // Update the state with the new recording if found
    if (recording) {
      setState((oldState) => ({
        ...oldState,
        recording
      }));
    }

    // Update the state with the new sheet if found
    if (sheet) {
      setState((oldState) => ({
        ...oldState,
        sheet
      }));
    }
  }, [state.song, state.recording]);

  /**
   * Effect hook to initialize the first recording and sheet when the song is set in the state
   * This is useful to set the default values for recording and sheet when a song is loaded
   */
  useEffect(() => {
    if (!state.song) return;
    
    setState((oldState) => {
      console.log(state.song.recordings[0]); // Log the first recording for debugging
      return {
        ...oldState,
        recording: state.song.recordings[0], // Set the first recording
        sheet: state.song.sheets[0] // Set the first sheet
      }
    });
  }, [state.song]);

  useEffect(() => {
    if(!state?.recording?.id) return;
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play().catch(new Function());
  }, [state.recording]);

  // Provide the state and actions (setModuloAndSong, changeVoice, changeVocals) to the rest of the app
  return (
    <PlayerContext.Provider value={{ state, setModuloAndSong, changeVoice, changeVocals }}>
      {children}
      {state.recording && 
        <audio 
          style={{
            position: 'fixed',
            top: '-100%',
            left: '-100%'
          }}
          ref={audioRef} 
          controls={true} 
          autoPlay={true}
        >
          <source 
            src={state.recording.file_path} 
            type={state.recording.file_type} 
          />
        </audio>
      }
    </PlayerContext.Provider>
  );
}