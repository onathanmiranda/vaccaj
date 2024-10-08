'use client';
import { useContext, useMemo, useCallback } from "react";
import { PlayerContext } from "@/context/player";
import Slider from './slider';
import Icon from "@/components/atoms/icon";

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
  const { state, changeVoice, changeVocals, play, pause, skip, changeRepeatStatus, REPEAT_ALL, NO_REPEAT, REPEAT_ONE } = useContext(PlayerContext);

  const voiceOptions = useMemo(() => {
    if(!state.song) return false;
    if(state.song.recordings.length === 1) return false;
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
    if(state.song.recordings.length === 1) return false;
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

  const handlePlayPause = useCallback(() => {
    if(state.playing){
      pause();
    } else {
      play();
    }
  }, [state.playing, play, pause]);

  const handleSkip = useCallback((e) => {
    skip(parseFloat(e.currentTarget.value));
  }, [skip]);

  if(!state.recording) return;

  return (
    <div className="border-t border-zinc-800">
      {vocalsOption && 
        <div className="my-2 px-5 w-full overflow-x-scroll lg:overflow-hidden flex justify-center">
          <button disabled={currentRecordingHasVocals} onClick={handleVocalsChange} className={`leading-none text-xs lowercase hover:text-zinc-300 ${currentRecordingHasVocals ? "text-zinc-50" : "text-zinc-600" } pr-3 bg-transparent transition-all duration-300`} value={true}>com voz</button>
          <button disabled={!currentRecordingHasVocals} onClick={handleVocalsChange} className={`leading-none text-xs lowercase hover:text-zinc-300 ${!currentRecordingHasVocals ? "text-zinc-50" : "text-zinc-600" } bg-transparent transition-all duration-300`} value={false}>sem voz</button>
        </div>
      }
      {voiceOptions && 
        <div className="my-2 px-5 w-full overflow-x-scroll lg:overflow-hidden flex justify-center">
          {voiceOptions.map((option) => {
            const isActive = playingVoiceTypesIds.includes(option.id);
            return <button disabled={isActive} onClick={handleVoiceChange} className={`leading-none text-xs lowercase hover:text-zinc-300 ${isActive ? "text-zinc-50" : "text-zinc-600" } pr-3 bg-transparent transition-all duration-300`} key={option.id} value={option.id}>{option.title}</button>
          })}
        </div>
      }
      {state.recording && (
        <div className="px-5">
          <Slider className={'my-4'}/>
          <div className="my-2 flex justify-center gap-5 items-center">
            <button className="opacity-0 w-6 h-6 pointer-events-none"></button>
            <button value="-1" onClick={handleSkip} >
              <Icon.SkipPrevious />
            </button>
            <button onClick={handlePlayPause} >
              {state.playing ? 
                <Icon.Pause className={""} /> 
                  : <Icon.Play className={""} />
              }
            </button>
            <button value="1" onClick={handleSkip} >
              <Icon.SkipNext />
            </button>
            <button onClick={changeRepeatStatus} 
              className={`${state.repeatStatus === NO_REPEAT ? 'text-zinc-500' : 'text-zinc-50'}`}
            >
              {state.repeatStatus === REPEAT_ALL && <Icon.Repeat />}
              {state.repeatStatus === NO_REPEAT && <Icon.Repeat />}
              {state.repeatStatus === REPEAT_ONE && <Icon.RepeatOne />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}