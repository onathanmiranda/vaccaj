import { useContext } from "react";
import Link from "next/link";

import { PlayerContext } from "../../../contexts/playerContext";

import { button, buttonActive } from "../../styles";

export default function SongControls(){
  const { state } = useContext(PlayerContext);
  const { song, voiceType } = state;
  
  if(!song) return null;

  const showVoiceTypesOptions = song.voiceTypeOptions.length > 1;

  return (  
    <div>
      {showVoiceTypesOptions && (
        <div className="bg-white h-55 overflow-x-scroll">
          <ul className="w-auto h-full flex items-center lg:justify-center">
            {song.voiceTypeOptions.map((voiceTypeOption) => {
              const href = song.href.split('?')[0].concat('?', 'voiceType=', voiceTypeOption.voiceType.id)
              return (
                <li key={voiceTypeOption.voiceType.id} className="ml-8">
                  <Link href={href} className={voiceType.id === voiceTypeOption.voiceType.id ? buttonActive : button }>
                    {voiceTypeOption.voiceType.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}