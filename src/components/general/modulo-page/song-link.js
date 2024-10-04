'use client';

import { useContext } from "react";
import Link from "next/link";
import { PlayerContext } from "@/context/player";
import Icon from "@/components/atoms/icon";

export default function SongLink({ song }) {
  const { state } = useContext(PlayerContext);
  
  return (
    <Link
      title={song.title}
      aria-label={song.title}
      href={song.url}
      className="mt-1 py-1 inline-flex items-center"
    >
      <Icon.Play className={`h-10 fill-gray-500`} />
      <div>
        <div className="text-sm text-gray-100">{song.title}</div>
        {song.beginning && (
          <div className=" font-thin text-xs italic text-gray-400">
            {song.beginning}
          </div>
        )}
      </div>
    </Link>
  );
}
