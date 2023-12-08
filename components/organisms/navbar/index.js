"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { button, buttonActive } from "../../styles";

const links = [
  { href: "/modulos/vocalizes", text: "Vocalizes" },
  { href: "/modulos/belting", text: "Belting" },
  { href: "/modulos/vaccaj", text: "Vaccaj" },
  { href: "/modulos/panofka", text: "Panofka" },
  { href: "/ferramentas-externas", text: "Ferramentas Externas" }
];

export default function Navbar(){
  const pathName = usePathname();
  
  return (
    <nav className="fixed flex items-center justify-center left-0 bottom-0 w-screen bg-white h-55 border-t-2 border-brand-semi-transparent">
      <ul>
      {links.map(({ href, text }) => {
        <Link key={href} className={`${href === pathName ? buttonActive : button} ml-8`} href={href}>{text}</Link>
        }
      )}
      </ul>
    </nav>
  );
}