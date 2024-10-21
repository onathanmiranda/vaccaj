'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'

function isAppInstalled() {
  // Modern check for display-mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }

  // Fallback for older Safari versions
  if (window.navigator.standalone === true) {
    return true;
  }

  // Default: app is not running in standalone mode
  return false;
}

const isInstalled = isAppInstalled();

export default function Menu({ className = "", modulos = [] }){
  const params = useParams();
  
  return (
    <ul className={`flex items-center gap-8 text-sm ${isInstalled ? 'pt-3 pb-10' : 'h-12'} ${className}`}>
      {modulos.map((modulo) => (
        <li key={modulo.url} className={`hover:text-zinc-300 ${modulo.slug === params.modulo ? "text-zinc-50" : "text-zinc-600"} transition-colors duration-500`}>
          <Link href={modulo.url}>{modulo.short_title}</Link>
        </li>
      ))}
    </ul>
  );
}
