import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import Modulos from "@/models/Modulos";

import Menu from "@/components/general/menu";
import Player from "@/components/general/player";
import Header from "@/components/general/header";

import PlayerContextProvider from "@/context/player";

import configs from "@/configs";
import "@/globals.css";

export const metadata = {
  ...configs.metadata,
};

export const viewport = {
  ...configs.viewport,
};

const modulos = await Modulos.getAllModulosURLsAndTitles();

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="h-svh lowercase text-zinc-300 bg-zinc-900">
        <PlayerContextProvider>
          <div className="grid grid-rows-[auto_1fr_auto_auto] lg:grid-rows-[auto_1fr_auto] h-full max-h-svh">
            <div className={`flex flex-col items-center justify-center`}>
              <Header modulos={modulos} />
            </div>
            <main className="overflow-hidden">{children}</main>
            <aside className="overflow-hidden">
              <Player />
            </aside>
            <div
              className={`border-t border-zinc-800 flex items-center justify-center lg:hidden`}
            >
              <Menu modulos={modulos} />
            </div>
          </div>
        </PlayerContextProvider>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-V8RDFC06E6" />
    </html>
  );
}
