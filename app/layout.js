import './global.css';

import data from '../data';

import InstallPromptContextProvider from '../contexts/installPromptContext';

import _metadata from "./_metadata";
import _viewport from "./_viewport";

import Navbar from '../components/organisms/navbar';

export const metadata = _metadata;
export const viewport = _viewport;

export default async function Layout({ children }){
  const { modules } = data;
  
  const links = [
    ...modules.map((modulo) => {
      return {
        href: `/modulos/${modulo.slug}`,
        text: modulo.title
      }
    }),
    {
      href: `/ferramentas-externas`,
      text: "Ferramentas externas"
    }
  ];

  return (
    <InstallPromptContextProvider>
      <html lang="pt-BR">
        <body className='sans bg-white text-black text-base leading-none'>
          {children}
          <Navbar links={links} />
        </body>
      </html>
    </InstallPromptContextProvider>
  )
}