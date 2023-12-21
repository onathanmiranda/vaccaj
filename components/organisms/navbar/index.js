"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '../../atoms/logo';

import { button, buttonActive } from "../../styles";

export default function Navbar({ links = [] }){
  const pathName = usePathname();
  
  const linkObjects = useMemo(() => {
    return links.map((link) => {
      return {
        ...link,
        isActive: pathName.includes(link.href)
      }
    });
  }, [pathName, links]);

  return (
    <div className='bg-white h-34 relative lg:fixed w-full top-0 z-50 lg:h-55 lg:px-21 lg:flex lg:justify-around lg:items-center lg:border-b-2 lg:border-brand-semi-transparent'>
      <Link className='px-21 py-5 lg:py-0 lg:px-0 h-34 w-full lg:w-auto fixed lg:relative top-0 left-0 bg-white lg:bg-transparent' href="/">
        <Logo className='h-full w-auto ml-auto lg:ml-0' />
      </Link>
      <nav className={`fixed lg:relative left-0 bottom-0 w-screen lg:w-auto overflow-x-scroll md:overflow-visible bg-white lg:bg-transparent border-t-2 lg:border-t-0 border-brand-semi-transparent`}>
        <ul className='flex items-center md:justify-center h-55 w-auto'>
          {linkObjects.map(({ href, text, isActive }) => (
            <li key={href}>
              <Link 
                className={`${isActive ? buttonActive : button} ml-8`} 
                href={`${isActive ? '/' : href}`}
              >{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}