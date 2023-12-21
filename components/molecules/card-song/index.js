import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import IconPlay from "../../atoms/icons/icon-play";

import { button, buttonActive } from '../../styles';

export default function CardSong({ song }){
  const { beginning, title, href } = song;
  const pathName = usePathname();

  const isActive = pathName === href.split('?')[0];
  
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