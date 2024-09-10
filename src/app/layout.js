import SongContextProvider from "@/context/song";

import Navbar from "@/components/organisms/navbar";

import configs from "../configs";
import "@/styles/globals.css";

export const metadata = {
  ...configs.metadata
};

export const viewport = {
  ...configs.viewport
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="h-svh">
        <SongContextProvider>
          <div className="grid grid-rows-[theme(spacing.12)_1fr_auto] h-full max-h-svh">
            <div className={`flex items-center justify-center bg-zinc-950`}>
              <Navbar />
            </div>
            <main className="overflow-hidden">{children}</main>
            <aside className="bg-slate-800">Player</aside>
          </div>
        </SongContextProvider>
      </body>
    </html>
  );
}
