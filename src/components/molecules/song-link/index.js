import Icon from "../../atoms/icon";
import Link from "next/link";

export default function SongLink({ song }) {
  return (
    <Link
      title={song.title}
      aria-label={song.title}
      href={song.url}
      className="mt-1 bg-gray-900 hover:bg-gray-800 py-1 pl-7 pr-2 rounded-full flex justify-between items-center"
    >
      <div>
        <div className="text-sm text-gray-100">{song.title}</div>
        {song.beginning && (
          <div className=" font-thin text-xs italic text-gray-400">
            {song.beginning}
          </div>
        )}
      </div>
      <Icon.Play className={`h-10 fill-gray-500`} />
    </Link>
  );
}
