"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { button, buttonActive } from "../../styles";

export default function Navbar({ links = [] }){
  const pathName = usePathname();
  
  return (
    <nav className="fixed left-0 bottom-0 w-screen overflow-x-scroll bg-white
    border-t-2 border-brand-semi-transparent">
      <ul className='flex items-center justify-center h-55 w-auto'>
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link className={`${href === pathName ? buttonActive : button} ml-8`} href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}