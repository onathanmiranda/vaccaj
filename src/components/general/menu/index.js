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
        <li key={modulo.url} className={`hover:text-zinc-300 ${modulo.slug === params.modulo ? "text-zinc-50" : "text-zinc-600"} transition-colors duration-500`}>
          <Link href={modulo.url}>{modulo.short_title}</Link>
        </li>
      ))}
    </ul>
  );
}
