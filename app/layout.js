import './global.scss';

import InstallPromptContextProvider from '../contexts/installPromptContext';

import _metadata from "./_metadata";
import _viewport from "./_viewport";

import Navbar from '../components/organisms/navbar';

export const metadata = _metadata;
export const viewport = _viewport;

export default function Layout({ children }){
  return (
    <InstallPromptContextProvider>
      <html lang="pt-BR">
        <body className='sans bg-white text-black text-base leading-none'>
          {children}
          <Navbar />
        </body>
      </html>
    </InstallPromptContextProvider>
  )
}