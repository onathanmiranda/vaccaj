'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'

export default function Menu({ className = "", modulos = [] }){
  const params = useParams();
  return (
    <ul className={`group flex gap-8 text-sm ${className}`}>
      {modulos.map((modulo) => (
        <li key={modulo.url} className={`group-hover:text-zinc-600 ${modulo.slug === params.modulo ? "!text-zinc-50" : "hover:!text-zinc-300 text-zinc-800"} transition-colors duration-500`}>
          <Link href={modulo.url}>{modulo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
