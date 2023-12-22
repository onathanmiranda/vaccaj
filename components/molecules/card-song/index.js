import { useContext } from "react";
import Link from "next/link";

import { PlayerContext } from "../../../contexts/playerContext";

import IconPlay from "../../atoms/icons/icon-play";

import { button, buttonActive } from '../../styles';

export default function CardSong({ song }){
  const { state } = useContext(PlayerContext);

  const { beginning, title, href, id } = song;

  const isActive = state?.song?.id === id;
  
  return (
    <Link href={href} className={`${isActive ? buttonActive : button } h-55 justify-between items-center mt-13`}>
      <div className="truncate">
        <div className="font-bold text-base truncate">{title}</div>
        <div className="font-light text-sm truncate">{beginning}</div>
      </div>
      <IconPlay />
    </Link>
  )
}