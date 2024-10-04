'use client';
import { useContext, useEffect, useMemo, useCallback, useRef } from "react";
import { PlayerContext } from "@/context/player";

function checkRecordingBooleanOptions(recordings, option) {
  let has = false;
  let hasnot = false;

  for (const recording of recordings) {
    if (recording[option]) {
      has = true;
    } else {
      hasnot = true;
    }

    // If both conditions are met, return true early
    if (has && hasnot) {
      return true;
    }
  }

  // If we finish the loop and haven't returned, it means one or both conditions were not met
  return false;
}

export default function Player(){
  const { state, changeVoice, changeVocals } = useContext(PlayerContext);

  const voiceOptions = useMemo(() => {
    if(!state.song) return [];
    const voiceTypesMap = state.song.recordings.reduce((acc, recording) => {
      recording.voice_types.forEach((voiceType) => {
        acc.set(voiceType.id, voiceType);
      });
      return acc;
    }, new Map());
    return Array.from(voiceTypesMap.values()).sort((a, b) => a.id - b.id);
  }, [state.song]);

  const vocalsOption = useMemo(() => {
    if(!state.song) return false;
    return checkRecordingBooleanOptions(state.song.recordings, 'has_vocals');
  }, [state.song]);

  const currentRecordingHasVocals = useMemo(() => {
    if(!state.recording) return false;
    return state.recording.has_vocals;
  }, [state.recording]);

  const playingVoiceTypesIds = useMemo(() => {
    if(!state.recording) return [];
    return state.recording.voice_types.map((voiceType) => voiceType.id);
  }, [state.recording]);

  const handleVoiceChange = useCallback((e) => {
    const voiceTypeId = Number(e.currentTarget.value);
    changeVoice(voiceTypeId);
  }, [changeVoice]);

  const handleVocalsChange = useCallback((e) => {
    const stringToBoolean = { "true": true, "false": false };
    const hasVocals = stringToBoolean[e.currentTarget.value];
    changeVocals(hasVocals);
  }, [changeVocals]);

  if(!state.recording) return;

  return (
    <div className="border-t border-zinc-800 py-4">
      {vocalsOption && 
        <div className="mb-3 px-5 w-full overflow-x-scroll lg:overflow-hidden flex lg:justify-center group">
          <button disabled={currentRecordingHasVocals} onClick={handleVocalsChange} className={`group-hover:text-zinc-600 leading-none text-xs lowercase ${currentRecordingHasVocals ? "!text-zinc-50" : "hover:!text-zinc-300 text-zinc-800" } pr-3 bg-transparent transition-all duration-300`} value={true}>com voz</button>
          <button disabled={!currentRecordingHasVocals} onClick={handleVocalsChange} className={`group-hover:text-zinc-600 leading-none text-xs lowercase ${!currentRecordingHasVocals ? "!text-zinc-50" : "hover:!text-zinc-300 text-zinc-800" } bg-transparent transition-all duration-300`} value={false}>sem voz</button>
        </div>
      }
      {voiceOptions.length && 
        <div className="mb-3 px-5 w-full overflow-x-scroll lg:overflow-hidden flex lg:justify-center group">
          {voiceOptions.map((option) => {
            const isActive = playingVoiceTypesIds.includes(option.id);
            return <button disabled={isActive} onClick={handleVoiceChange} className={`group-hover:text-zinc-600 leading-none text-xs lowercase ${isActive ? "!text-zinc-50" : "hover:!text-zinc-300 text-zinc-800" } pr-3 bg-transparent transition-all duration-300`} key={option.id} value={option.id}>{option.title}</button>
          })}
        </div>
      }
      <div className="px-5">
        {state.recording && (
          <p>Player</p>
        )}
      </div>
    </div>
  );
}