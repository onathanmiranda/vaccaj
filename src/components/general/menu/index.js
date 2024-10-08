'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'

export default function Menu({ className = "", modulos = [] }){
  const params = useParams();
  return (
    <ul className={`flex gap-8 text-sm ${className}`}>
      {modulos.map((modulo) => (
        <li key={modulo.url} className={`hover:text-zinc-300 ${modulo.slug === params.modulo ? "text-zinc-50" : "text-zinc-600"} transition-colors duration-500`}>
          <Link href={modulo.url}>{modulo.short_title}</Link>
        </li>
      ))}
    </ul>
  );
}
