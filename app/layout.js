import './global.css';

import data from '../data';

import _metadata from "./_metadata";
import _viewport from "./_viewport";

import Navbar from '../components/organisms/navbar';
import Player from '../components/organisms/player';

import PlayerContextProvider from "../contexts/playerContext";

export const metadata = _metadata;
export const viewport = _viewport;

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

export default async function Layout(props){
  return (
    <PlayerContextProvider>
      <html lang="pt-BR">
        <body className='sans bg-white text-black text-base leading-none relative scroll-smooth'>
          <Navbar links={links} />
          {props.children}
          <Player />
        </body>
      </html>
    </PlayerContextProvider>
  )
}