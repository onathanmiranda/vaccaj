import {
  useState,
  useContext,
  createContext,
  useCallback,
  useRef,
  useEffect,
} from "react";

import { useLocalStorageContext } from "../localStorageContext";

import { getCookie } from "../../helpers/cookies";

import config from "../../config";

const initialState = {
  player: {
    playing: false,
    repeatOne: false,
    playbackRate: 1.0,
  },
  recording: false,
  song: false,
  showGuides: false,
};

const PlayerContext = createContext(initialState);

const preferredRecordingsKey = "preferredRecording";

export default function PlayerContextProvider({ children }) {
  const state = useState(initialState);

  const playerRef = useRef(typeof window !== "undefined" ? new Audio() : null);

  return (
    <PlayerContext.Provider value={{ state, playerRef }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  const { state, playerRef } = useContext(PlayerContext);
  const [playerContextState, setPlayerContextState] = state;

  const localStorage = useLocalStorageContext();

  const getRecordingBasedOnPreviouslySelectedVoice = useCallback(
    ({ song, recording }) => {
      const preferredRecordings = localStorage.getItem(
        config.cookies.preferredRecordingsKey
      );

      if (!preferredRecordings) return recording;
      if (song.recordings.length <= 1) return recording;

      const recordingId = preferredRecordings.get(song.id);

      if (!recordingId) return recording;

      const correctRecording = song.recordings.find(
        ({ id }) => id === `${recordingId}`
      );

      if (!correctRecording) return recording;

      return correctRecording;
    },
    [localStorage]
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

      const {
        lyrics,
        title,
        id: songId,
        recordings,
        voiceTypesOptions,
        instructions,
        beginning,
      } = song;

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
            voiceTypesOptions,
            instructions,
            beginning,
          },
        };
      });

      playerRef.current.src = filePath;
      playerRef.current.type = type;
    },
    [
      getRecordingBasedOnPreviouslySelectedVoice,
      playerRef,
      setPlayerContextState,
    ]
  );

  const changeSongRecording = useCallback(
    ({ recording }) => {
      if (!recording) {
        console.error("changeSongRecording is missing params");
        return;
      }

      const { song } = playerContextState;

      const cookieConsent = getCookie(config.cookies.cookieConsentKey);

      if (cookieConsent !== config.cookies.cookiesAllowedValue) {
        return setSong({
          recording,
          song,
        });
      }

      const localStorageData = localStorage.getItem(preferredRecordingsKey);

      const preferredRecordingsMap = localStorageData || new Map();

      preferredRecordingsMap.set(song.id, recording.id);

      localStorage.setItem(
        config.cookies.preferredRecordingsKey,
        preferredRecordingsMap
      );

      return setSong({
        song,
        recording,
        usePreviousSelectedVoiceType: false,
      });
    },
    [playerContextState, localStorage, setSong]
  );

  const play = useCallback(
    (player = playerRef.current) => {
      return player.play().then(() => {
        setPlayerContextState((oldState) => {
          return {
            ...oldState,
            player: {
              ...oldState.player,
              playing: true,
            },
          };
        });
      });
    },
    [playerRef, setPlayerContextState]
  );

  const pause = useCallback(
    (player = playerRef.current) => {
      player.pause();
      setPlayerContextState((oldState) => {
        return {
          ...oldState,
          player: {
            ...oldState.player,
            playing: false,
          },
        };
      });
    },
    [playerRef, setPlayerContextState]
  );

  const load = useCallback(
    (player = playerRef.current) => {
      return player.load();
    },
    [playerRef]
  );

  const clearPlayer = useCallback(() => {
    pause();
    setPlayerContextState(initialState);
  }, [setPlayerContextState, pause]);

  const setRepeatOne = useCallback(
    (repeatOne) => {
      setPlayerContextState((oldState) => ({
        ...oldState,
        player: {
          ...oldState.player,
          repeatOne,
        },
      }));
    },
    [setPlayerContextState]
  );

  const changePlaybackRate = useCallback(
    (playbackRate) => {
      setPlayerContextState((oldState) => ({
        ...oldState,
        player: {
          ...oldState.player,
          playbackRate,
        },
      }));
    },
    [setPlayerContextState]
  );

  useEffect(() => {
    const player = playerRef.current;

    player.onended = () => {
      if (playerContextState.player.repeatOne) {
        load();
        play();
      } else {
        load();
        pause();
      }
    };
    playerContextState.player.playbackRate;

    player.playbackRate = playerContextState.player.playbackRate;

    return () => {
      player.onEnd = null;
    };
  }, [playerRef, playerContextState, load, pause, play]);

  return {
    playerContextState,
    setSong,
    setRepeatOne,
    play,
    pause,
    load,
    clearPlayer,
    changeSongRecording,
    changePlaybackRate,
  };
};
