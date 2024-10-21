'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { H1 } from "@/components/atoms/headings";
import ModuloAbout from "./modulo-about";
import ModuloLessons from "./modulo-lessons";

export default function ModuloPage({ modulo }) {
  const pathName = usePathname();

  return (
    <section className="pb-36 h-full overflow-y-scroll">
      {!pathName.includes('vocalizes') && <div className="pt-4 px-6 max-w-screen-lg mx-auto">
        <p className="text-xs text-zinc-500">Aqueça a voz antes de cantar:</p>
        <Link className="transition-colors duration-500 underline hover:text-zinc-50 text-zinc-500 mt-1 inline-flex items-center justify-start gap-1 leading-none" href={'/modulos/vocalizes'}>vocalizes</Link>    
      </div>}
      <div className="px-6 mt-12 w-full max-w-screen-lg mx-auto">
        <H1 className="max-w-80">{modulo.title}</H1>
        <div className="mt-6 lg:mt-10 flex flex-col md:flex-row md:justify-between">
          <ModuloLessons lessons={modulo.lessons} className={`w-full max-w-80`} />
          <ModuloAbout modulo={modulo} className={`mt-10 md:mt-0 max-w-prose`} />
        </div>
      </div>
    </section>
  );
}
