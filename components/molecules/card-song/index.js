import { useContext } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { PlayerContext } from "../../../contexts/playerContext";

import IconPlay from "../../atoms/icons/icon-play";

import { button, buttonActive } from '../../styles';

export default function CardSong({ song }){
  const searchParams = useSearchParams();
  const { state } = useContext(PlayerContext);

  const { beginning, title, href, id } = song;

  const isActive = state?.song?.id === id;
  const skillFilter = searchParams.has('skill') ? `&skill=${searchParams.get('skill')}` : "";
  
  return (
    <Link href={href + skillFilter} className={`${isActive ? buttonActive : button } h-55 justify-between items-center mt-13`}>
      <div className="truncate">
        <div className="font-bold text-base truncate">{title}</div>
        <div className="font-light text-sm truncate">{beginning}</div>
      </div>
      <IconPlay />
    </Link>
  )
}