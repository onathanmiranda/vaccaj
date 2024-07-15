
import configs from "../configs";
import "@/styles/globals.css";

import Navbar from "@/components/organisms/navbar";

export const metadata = {
  ...configs.metadata
};

export const viewport = {
  ...configs.viewport
};

const navbarHeight = 12;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={``}>
        <nav className={`h-${navbarHeight} fixed top-0 w-full flex items-center justify-center bg-zinc-950`}>
          <Navbar />
        </nav>
        <main className={`mt-${navbarHeight} h-svh`}>
          {children}
        </main>
        <aside className={`fixed bottom-0 w-full bg-blue-400`}>
          Player
        </aside>
      </body>
    </html>
  );
}
