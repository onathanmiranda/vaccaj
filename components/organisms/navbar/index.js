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
        isActive: pathName === link.href
      }
    });
  }, [pathName, links]);

  return (
    <div className='lg:flex lg:justify-around lg:items-center lg:px-21 lg:border-b-2 lg:border-brand-semi-transparent'>
      <Logo className='h-34 mx-auto lg:mx-0 my-13' />
      <nav className={`fixed lg:relative left-0 bottom-0 w-screen lg:w-auto overflow-x-scroll md:overflow-visible bg-white border-t-2 lg:border-t-0 border-brand-semi-transparent`}>
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