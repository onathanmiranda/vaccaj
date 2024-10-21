import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google'

import Modulos from "@/models/Modulos";
import Menu from "@/components/general/menu";
import Player from "@/components/general/player";

import configs from "@/configs";
import "@/globals.css";
import PlayerContextProvider from "@/context/player";
import Icon from "@/components/atoms/icon";

export const metadata = {
  ...configs.metadata
};

export const viewport = {
  ...configs.viewport
};

const modulos = await Modulos.getAllModulosURLsAndTitles();

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="h-svh lowercase text-zinc-300 bg-zinc-900">
        <PlayerContextProvider>
          <div className="grid grid-rows-[auto_1fr_auto_auto] lg:grid-rows-[auto_1fr_auto] h-full max-h-svh">
            <div className={`flex flex-col items-center justify-center`}>
              {/* <InstallPrompt /> */}
              <nav className="flex items-center lg:justify-between px-6 max-w-screen-lg w-full">
                <Link className={'text-zinc-50'} href="/" title="Vaccaj Homepage">
                  <Icon.Logo className={'h-6 w-auto'} />
                </Link>
                <Menu modulos={modulos} className={`hidden lg:flex`}/>
              </nav>
            </div>
            <main className="overflow-hidden">{children}</main>
            <aside className="overflow-hidden">
              <Player />
            </aside>
            <div className={`border-t border-zinc-800 flex items-center justify-center lg:hidden`}>
              <Menu modulos={modulos} />
            </div>
          </div>
        </PlayerContextProvider>
      </body>
      <GoogleAnalytics gaId="G-V8RDFC06E6" />
    </html>
  );
}
