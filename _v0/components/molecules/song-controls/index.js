import { useContext } from "react";
import Link from "next/link";

import IconBackward from "../../atoms/icons/icon-backward";
import IconFoward from "../../atoms/icons/icon-foward";
import IconPause from "../../atoms/icons/icon-pause";
import IconPlay from "../../atoms/icons/icon-play";
import IconRepeat from "../../atoms/icons/icon-repeat";
import IconSpeed from "../../atoms/icons/icon-speed";

import { PLAYING, PlayerContext } from "../../../contexts/playerContext";

import { button, buttonActive } from "../../styles";

const playerButtonsClassName = button.replace('h-34', 'h-55').replace('px-21', 'px-0').concat(" ml-13 w-34");
const playerButtonsActiveClassName = buttonActive.replace('h-34', 'h-55').replace('px-21', 'px-0').concat(" ml-13 w-34");;

export default function SongControls(){
  const { state, play, pause, goBackwards, toggleLoop } = useContext(PlayerContext);
  const { song, voiceType } = state;

  if(!song) return null;
  
  const showVoiceTypesOptions = song.voiceTypeOptions.length > 1;
  const isPlaying = state.player.playing === PLAYING;
  const loopActive = state.player.loop;

  return (  
    <div>
      {showVoiceTypesOptions && (
        <div className="bg-white h-55 overflow-x-scroll border-t-2 border-brand-semi-transparent">
          <ul className="w-auto h-full flex items-center md:justify-center">
            {song.voiceTypeOptions.map((voiceTypeOption) => {
              const href = song.href.split('?')[0].concat('?', 'voiceType=', voiceTypeOption.voiceType.id, "&instructions")
              return (
                <li key={voiceTypeOption.voiceType.id} className="ml-8">
                  <Link href={href}
                    className={
                      voiceType.id === voiceTypeOption.voiceType.id ? buttonActive : button 
                    }
                  >
                    {voiceTypeOption.voiceType.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-center py-8 px-21 bg-white border-t-2 border-brand-semi-transparent">
        <button className={`${playerButtonsClassName}`}><IconSpeed/></button>
        <button onClick={goBackwards} className={`${playerButtonsClassName}`}><IconBackward/></button>
        <button onClick={isPlaying ? pause : play} className={`${isPlaying ? playerButtonsActiveClassName.replace('w-34', 'w-89') : playerButtonsClassName.replace('w-34', 'w-89')} ${isPlaying ? 'bg-gradient-vaccaj' : ""}`}>
          {isPlaying && <IconPause/>}
          {!isPlaying && <IconPlay/>}
        </button>
        <button className={`${playerButtonsClassName}`}><IconFoward/></button>
        <button onClick={toggleLoop} className={`${loopActive ? playerButtonsActiveClassName : playerButtonsClassName}`}>
          <IconRepeat pathsClassName={`${loopActive ? "fill-white" : ""}`} />
        </button>
      </div>
    </div>
  )
}