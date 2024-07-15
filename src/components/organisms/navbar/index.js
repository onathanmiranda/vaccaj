import Link from "next/link";

import Modulos from "@/models/Modulos";

export default async function Navbar({ className }) {
  const modulos = await Modulos.getAllModulosURLsAndTitles();
  return (
    <div className="flex items-center justify-between px-6 max-w-screen-lg w-full">
      <Link href="/" title="Homepage">VACCAJ</Link>
      <ul className="flex text-sm">
        {modulos.map((modulo) => (
          <li key={modulo.url} className="ml-8 hover:underline">
            <Link href={modulo.url}>{modulo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
