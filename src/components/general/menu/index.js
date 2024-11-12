'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'
import usePWA from "@/hooks/usePWA";

export default function Menu({ className = "", modulos = [] }){
  const params = useParams();
  const { isStandalone } = usePWA();
  
  return (
    <ul className={`flex items-center gap-8 text-sm ${isStandalone ? 'pt-3 pb-10' : 'h-12'} ${className}`}>
      {modulos.map((modulo) => (
        <li key={modulo.url} className={`${modulo.slug === params.modulo ? "text-purple-400" : "text-zinc-600"}  hover:text-purple-200 transition-colors duration-500`}>
          <Link href={modulo.url}>{modulo.short_title}</Link>
        </li>
      ))}
    </ul>
  );
}
