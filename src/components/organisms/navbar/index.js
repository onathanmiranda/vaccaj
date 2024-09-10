import Link from "next/link";

import Models from "@/models";

export default async function Navbar() {
  const modulos = await Models.Modulos.getAllModulosURLsAndTitles();

  return (
    <nav className="flex items-center justify-between px-6 max-w-screen-lg w-full">
      <Link href="/" title="Homepage">
        VACCAJ
      </Link>
      <ul className="flex text-sm">
        {modulos.map((modulo) => (
          <li key={modulo.url} className="ml-8 hover:underline">
            <Link href={modulo.url}>{modulo.title}</Link>
          </li>
        ))}
      </ul>
      <Link
        className={"text-gray-400 text-xs hover:underline"}
        href={`/ferramentas-externas`}
      >
        Ferramentas Externas
      </Link>
    </nav>
  );
}
