'use client';

import { useState, createContext, useCallback, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';

const [NO_REPEAT, REPEAT_ALL, REPEAT_ONE] = [-1, 0, 1];
const audioSpeeds = [1, 1.25, 1.5, 1.75, 2, 0.5, 0.75];
const PREFERRED_VOICE_TYPE_KEY = 'preferredVoiceType';

// Initial state for the context
const initialState = {
  audioPercent: 0,
  repeatStatus: REPEAT_ALL,
  playbackRate: audioSpeeds[0]
};

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
  const router = useRouter();

  // audio element ref
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

  const changeSpeed = useCallback(() => {
    if(!audioRef.current) return;
    const playBackRateIndex = audioSpeeds.findIndex((value) => value === state.playbackRate);
    const nextIndex = (playBackRateIndex + 1) % audioSpeeds.length;
    if(!audioSpeeds[nextIndex]) throw new Error("Speed not found");
    setState((oldState) => ({
      ...oldState,
      playbackRate: audioSpeeds[nextIndex]
    }));
  }, [state.playbackRate]);

  const setDefaultVoice = useCallback(() => {
    setState((oldState) => {
      return {
        ...oldState,
        recording: oldState.song.recordings[0], // Set the first recording
        sheet: oldState.song.sheets[0] // Set the first sheet
      }
    });
  }, []);

  const getCurrentSongVoiceTypeRecording = useCallback((id) => {
      if (!state.song || !state.recording) return null;

      // Define the fallback ID groups
      const fallbackGroups = {
          1: [2, 3],
          2: [1, 3],
          3: [1, 2],
          4: [5, 6],
          5: [4, 6],
          6: [4, 5],
      };

      // Helper function to find a recording by a given ID
      const findRecordingById = (voiceTypeId) => {
          return state.song.recordings.find((recording) => {
              return recording.voice_types.reduce((acc, voice_type) => {
                  return (
                      acc ||
                      (voice_type.id === voiceTypeId &&
                          recording.has_vocals === state.recording.has_vocals &&
                          recording.has_instruments === state.recording.has_instruments)
                  );
              }, false);
          });
      };

      // Try finding the recording with the given ID
      let recording = findRecordingById(id);

      // If not found, look for fallbacks
      if (!recording && fallbackGroups[id]) {
          for (let fallbackId of fallbackGroups[id]) {
              recording = findRecordingById(fallbackId);
              if (recording) break;
          }
      }

      return recording;
  }, [state.song, state.recording]);

  const getCurrentSongVoiceTypeSheet = useCallback((id) => {
    if(!state.song) return null;
    return state.song.sheets.find((sheet) => {
      return sheet.voice_types.reduce((acc, voice_type) => {
        return acc || voice_type.id === id;
      }, false);
    });
  }, [state.song]);

  /**
   * Function to change the current recording and sheet based on a specific voice type ID
   * It finds a recording and sheet that contains the selected voice type ID
   */
  const changeVoice = useCallback((id) => {
    if (!state.song) return;
    
    // Find a recording that has the selected voice type and matches the vocals and instruments status
    const recording = getCurrentSongVoiceTypeRecording(id);
    
    // Find a sheet that has the selected voice type
    const sheet = getCurrentSongVoiceTypeSheet(id);

    // Update the state with the new recording if found
    if (recording) {
      setState((oldState) => ({
        ...oldState,
        recording
      }));

      localStorage.setItem(PREFERRED_VOICE_TYPE_KEY, id);
    }

    // Update the state with the new sheet if found
    if (sheet) {
      setState((oldState) => ({
        ...oldState,
        sheet
      }));
    } else {
      setState((oldState) => ({
        ...oldState,
        sheet: null
      }));
    }
  }, [state.song, getCurrentSongVoiceTypeRecording, getCurrentSongVoiceTypeSheet]);

  const updateAudioTime = useCallback((percentage) => {
    if (!audioRef.current) return;
    // Ensure the percentage is between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    // Calculate the new currentTime based on the percentage
    const newTime = (percentage / 100) * audioRef.current.duration;
    // Update the audio currentTime
    audioRef.current.currentTime = newTime;
  }, []);

  const play = useCallback(() => {
    if(!audioRef.current) return;
    audioRef.current.play().then(() => {
      setState((oldState) => ({
        ...oldState,
        playing: true
      }));
    }).catch(() => {
      setState((oldState) => ({
        ...oldState,
        playing: false
      }));
    })
  }, []);

  const load = useCallback(() => {
    if(!audioRef.current) return;
    audioRef.current.load();
    setState((oldState) => ({
      ...oldState,
      playing: false
    }));
  }, []);

  const pause = useCallback(() => {
    if(!audioRef.current) return;
    audioRef.current.pause();
    setState((oldState) => ({
      ...oldState,
      playing: false
    }));
  }, []);

  const skip = useCallback((index = 1) => {
    if(!state.song) return;
    if(!state.modulo) return;
    if(index < 0 && audioRef.current.currentTime > 1){
      return updateAudioTime(0);
    }
    const currentSongIndex = state.modulo.songs.findIndex((song) => song.id === state.song.id);
    const nextSongIndex = currentSongIndex + index;
    const nextSong = state.modulo.songs[nextSongIndex];
    if(!nextSong && index < 0) return updateAudioTime(0);
    if(!nextSong) return;
    router.push(nextSong.url);
  }, [state.modulo, state.song, router, updateAudioTime]);

  const updateAudioPercentage = useCallback(() => {
    if(!audioRef.current) return;
    if (audioRef.current.duration > 0) {
      const playPercentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setState((oldState) => ({
        ...oldState,
        audioPercent: playPercentage
      }));
    }
  }, []);

  const changeRepeatStatus = useCallback(() => {
    setState((oldState) => {
      let newRepeatStatus;
      switch(oldState.repeatStatus){
        case REPEAT_ALL:
          newRepeatStatus = REPEAT_ONE;
          break;
        case REPEAT_ONE:
          newRepeatStatus = NO_REPEAT;
          break;
        case NO_REPEAT:
          newRepeatStatus = REPEAT_ALL;
          break;
        default:
          newRepeatStatus = oldState.repeatStatus;
      }
      return {
        ...oldState,
        repeatStatus: newRepeatStatus
      }
    });
  }, []);

  const restart = useCallback(() => {
    pause();
    load();
    play();
  }, [load, pause, play]);

  const onEnd = useCallback(() => {
    setState((oldState) => ({
      ...oldState,
      playing: false
    }));

    if(state.repeatStatus === REPEAT_ONE){
      restart();
    } else if(state.repeatStatus === REPEAT_ALL){
      skip();
    } else {
      updateAudioTime(0);
    }
  }, [restart, skip, state.repeatStatus, updateAudioTime]);

  /**
   * Effect hook to initialize the first recording and sheet when the song is set in the state
   * This is useful to set the default values for recording and sheet when a song is loaded
   */
  useEffect(() => {
    if (!state.song) return;

    const preferredVoiceType = parseInt(localStorage.getItem(PREFERRED_VOICE_TYPE_KEY));
    
    if(!preferredVoiceType){
      return setDefaultVoice();
    }
    const preferredVoiceTypeRecording = getCurrentSongVoiceTypeRecording(preferredVoiceType);
    
    if(preferredVoiceTypeRecording){
      return changeVoice(preferredVoiceType);
    }

    return setDefaultVoice();
  }, [state.song, setDefaultVoice, getCurrentSongVoiceTypeRecording, changeVoice]);

  useEffect(() => {
    if(!state?.recording?.id) return;
    restart();
  }, [state.recording, restart]);

  useEffect(() => {
    if(!audioRef.current) return;
    audioRef.current.playbackRate = state.playbackRate;
  }, [state.playbackRate])

  useEffect(() => {
    if(!state?.recording?.id) return;
    const audio = audioRef.current;
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('timeupdate', updateAudioPercentage);
    return () => {
      if(!audio) return;
      audio.removeEventListener('timeupdate', updateAudioPercentage);
      audio.removeEventListener('ended', onEnd);
    }
  }, [state.recording, onEnd, updateAudioPercentage])

  // Provide the state and actions (setModuloAndSong, changeVoice, changeVocals) to the rest of the app
  return (
    <PlayerContext.Provider value={{ 
      state, 
      setModuloAndSong, 
      changeVoice, 
      changeVocals, 
      play, 
      pause, 
      skip, 
      updateAudioTime, 
      REPEAT_ONE, 
      REPEAT_ALL, 
      NO_REPEAT,
      changeRepeatStatus,
      changeSpeed
    }}>
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