import { useState, useContext, createContext, useCallback } from "react";

import { useLocalStorageContext } from "../localStorageContext";

import { getCookie } from "../../helpers/cookies";

import config from "../../config";

const PlayerContext = createContext();

const initialState = {
  player: {
    playing: false,
  },
  recording: false,
  song: false,
  showGuides: false,
};

const preferredRecordingsKey = "preferredRecording";

export default function PlayerContextProvider({ children }) {
  const state = useState(initialState);

  return (
    <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  const [playerContextState, setPlayerContextState] = useContext(PlayerContext);

  const localStorage = useLocalStorageContext();

  const getRecordingBasedOnPreviouslySelectedVoice = useCallback(
    ({ song, recording }) => {
      const preferredRecordings = localStorage.getItem(preferredRecordingsKey);

      if (!preferredRecordings) return recording;
      if (song.recordings.length <= 1) return recording;

      const recordingId = preferredRecordings.get(song.id);

      if (!recordingId) return recording;

      const correctRecording = song.recordings.find(
        ({ id }) => id === recordingId
      );

      if (!correctRecording) return recording;

      return correctRecording;
    },
    [localStorage.getItem]
  );

  const setSong = useCallback(
    ({ recording, song, usePreviousSelectedVoiceType = true }) => {
      if (!recording || !song) {
        console.error("setSong is missing params");
        return;
      }

      let newRecording = usePreviousSelectedVoiceType
        ? getRecordingBasedOnPreviouslySelectedVoice({
            recording,
            song,
          })
        : recording;

      const { type, filePath, sheets, id: recordingId } = newRecording;

      const { lyrics, title, id: songId, recordings } = song;

      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          recording: {
            id: recordingId,
            type,
            filePath,
          },
          song: {
            id: songId,
            lyrics,
            title,
            sheets,
            recordings,
          },
          showGuides: Boolean(lyrics || sheets),
        };
      });
    },
    [setPlayerContextState, getRecordingBasedOnPreviouslySelectedVoice]
  );

  const changeSongRecording = useCallback(
    ({ recording }) => {
      if (!recording) {
        console.error("changeSongRecording is missing params");
        return;
      }

      const { song } = playerContextState;

      const cookieConsent = getCookie(config.cookieConsentKey);

      if (cookieConsent !== config.cookiesAllowedValue) {
        return setSong({
          recording,
          song,
        });
      }

      const localStorageData = localStorage.getItem(preferredRecordingsKey);
      const preferredRecordingsMap = localStorageData || new Map();

      preferredRecordingsMap.set(song.id, recording.id);

      localStorage.setItem(preferredRecordingsKey, preferredRecordingsMap);

      return setSong({
        song,
        recording,
        usePreviousSelectedVoiceType: false,
      });
    },
    [
      setSong,
      playerContextState.song,
      localStorage.setItem,
      localStorage.getItem,
    ]
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
    changeSongRecording,
  };
};
