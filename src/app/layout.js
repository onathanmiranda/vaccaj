import Link from "next/link";
import Models from "@/models";
import Menu from "@/components/general/menu";
import Player from "@/components/general/player";

import configs from "../configs";
import "@/styles/globals.css";
import PlayerContextProvider from "@/context/player";

export const metadata = {
  ...configs.metadata
};

export const viewport = {
  ...configs.viewport
};

const modulos = await Models.Modulos.getAllModulosURLsAndTitles();

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="h-svh lowercase">
        <PlayerContextProvider>
          <div className="grid grid-rows-[theme(spacing.12)_1fr_auto_theme(spacing.12)] lg:grid-rows-[theme(spacing.12)_1fr_auto] h-full max-h-svh">
            <div className={`flex items-center justify-center bg-zinc-950`}>
              <nav className="flex items-center lg:justify-center lg:justify-between px-6 max-w-screen-lg w-full">
                <Link href="/" title="Vaccaj Homepage">
                  VACCAJ <span className="lg:hidden">- Métodos de canto</span>
                </Link>
                <Menu modulos={modulos} className={`hidden lg:flex`}/>
              </nav>
            </div>
            <main className="overflow-hidden">{children}</main>
            <aside className="overflow-hidden">
              <Player />
            </aside>
            <div className={`border-t border-zinc-800 flex items-center justify-center bg-zinc-950 lg:hidden`}>
              <Menu modulos={modulos} />
            </div>
          </div>
        </PlayerContextProvider>
      </body>
    </html>
  );
}
