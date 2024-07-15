"use client";

import { createContext, useEffect, useState, useRef, useCallback } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { getModuleSongs, getModuloBySlug, getModuloSongBySlugOrId, getSongVoiceTypeOptionByVoiceTypeId } from "../../database";

function getCurrentPathState(moduloSlug, songSlug, voiceTypeId){
  const modulo = getModuloBySlug(moduloSlug);
  const song = getModuloSongBySlugOrId(songSlug, modulo);
  const { voiceType, recordings } = getSongVoiceTypeOptionByVoiceTypeId(song, voiceTypeId) || {};
  
  return { modulo, song, voiceType, recording: recordings ? recordings[0] : null };
}

function getPreviousSongUrl(moduloSlug, songSlug, skillId){
  const modulo = getModuloBySlug(moduloSlug);
  const moduloSongs = getModuleSongs(modulo, skillId);
  const currentSongIndex = moduloSongs.findIndex((song) => song.slug === songSlug);
  if(currentSongIndex < 1) return null;
  return moduloSongs[currentSongIndex - 1].href;
}

export const PLAYING = 'playing';
export const STOPPED = 'stopped';
export const PAUSED = 'paused';
export const LOADING = 'loading';

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const router = useRouter();
  const params = useParams();
  const { moduloSlug, songSlug } = params;
  
  const searchParams = useSearchParams();
  const voiceTypeId = searchParams.get("voiceType");
  
  const [state, setState ] = useState({ 
    ...getCurrentPathState(moduloSlug, songSlug, voiceTypeId),
    player: {
      playing: STOPPED
    }
  });
  
  const audioContextRef = useRef();
  const audioElementRef = useRef();
  const mediaElementSourceRef = useRef();

  const play = useCallback(() => {
    if(!audioElementRef.current || !audioContextRef.current) return;

    if(audioContextRef.current.state === "suspended") audioContextRef.current.resume();
    
    audioElementRef.current.play().then(() => {
      setState((oldState) => ({
        ...oldState,
        player: {
          ...oldState.player,
          playing: PLAYING
        }
      }));
    }).catch((e) => { console.log(e.message) });
  }, [setState]);

  const pause = useCallback(() => {
    if(audioElementRef.current) audioElementRef.current.pause();
    setState((oldState) => ({
      ...oldState,
      player: {
        ...oldState.player,
        playing: PAUSED
      }
    }));
  }, []);

  const stop = useCallback(() => {
    if(audioElementRef.current){ 
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }
    setState((oldState) => ({
      ...oldState,
      player: {
        ...oldState.player,
        playing: STOPPED
      }
    }));
  }, [setState]);

  const load = useCallback(() => {
    if(audioElementRef.current) audioElementRef.current.load();
    setState((oldState) => ({
      ...oldState,
      player: {
        ...oldState.player,
        playing: LOADING
      }
    }));
  }, [setState]);

  const toggleLoop = useCallback(() => {
    if(!audioElementRef.current) return;

    setState((oldState) => {
      audioElementRef.current.loop = !oldState.player.loop;
      return {
        ...oldState,
        player: {
          ...oldState.player,
          loop: !oldState.player.loop
        }
      }
    });
  }, [setState]);

  const goBackwards = useCallback(() => {
    if(!audioElementRef.current) return;

    const currentSkill = searchParams.get('skill');
    const url = getPreviousSongUrl(moduloSlug, songSlug, currentSkill);

    if(audioElementRef.current.currentTime > 2 || !url){
      audioElementRef.current.currentTime = 0;
      return;
    }

    router.push(url);
  }, [moduloSlug, router, searchParams, songSlug]);

  const updateAudioSourceAndPlay = useCallback((recordingFilePath) => {
    // updates audio source
    if(!recordingFilePath || !audioElementRef.current || !audioContextRef.current) return;
    if(audioElementRef.current) audioElementRef.current.pause();
    audioElementRef.current.src = recordingFilePath;
    load();
    play();
  }, [play, load]);

  useEffect(() => {
    // creates audio context if it doesn't exist
    if(!audioContextRef.current)
      audioContextRef.current = new AudioContext() || new webkitAudioContext();
    
    // creates audio element if it doesn't exist
    if(!audioElementRef.current){
      audioElementRef.current = new Audio();
      audioElementRef.current.preload = "auto";
    }

    // creates audio source if it doesn't exist
    if(!mediaElementSourceRef.current){
      mediaElementSourceRef.current = audioContextRef.current.createMediaElementSource(audioElementRef.current);
      mediaElementSourceRef.current.connect(audioContextRef.current.destination);
    }

    audioElementRef.current.addEventListener('ended', stop);
    return () => {
      audioElementRef.current.removeEventListener('ended', stop);
    }
  }, [stop]);
  
  useEffect(() => {
    // updates state based on url
    const newState = getCurrentPathState(moduloSlug, songSlug, voiceTypeId);
    
    setState((oldState) => {
      const newRecording = newState.recording;
      const currentRecordingId = oldState.recording?.id;
      const newRecordingIsDifferentfromCurrent = currentRecordingId !== newRecording?.id;
      const noCurrentSourceFileInAudioElement = !audioElementRef.current?.src;
      const currentAudioSourceIsOutdatedOrNull = newRecordingIsDifferentfromCurrent || noCurrentSourceFileInAudioElement;
      const shouldUpdateAudioSource = newRecording && currentAudioSourceIsOutdatedOrNull;

      if(shouldUpdateAudioSource){
        updateAudioSourceAndPlay(newState.recording.filePath);
      }

      return ({
        ...oldState,
        modulo: newState.modulo,
        song: newState.song || oldState.song,
        recording: newState.recording || oldState.recording,
        voiceType: newState.voiceType || oldState.voiceType
      });
    });
  }, [moduloSlug, songSlug, updateAudioSourceAndPlay, voiceTypeId]);

  return (
    <PlayerContext.Provider value={{ state, play, pause, goBackwards, toggleLoop }}>
      {children}
    </PlayerContext.Provider>
  );
}