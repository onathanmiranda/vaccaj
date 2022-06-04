import { useMemo } from "react";
import { useRouter } from "next/router";

import Markup from "./markup";

export default function Menu({ style }) {
  const { pathname } = useRouter();

  const links = useMemo(
    () => [
      {
        href: "/aquecimentos",
        title: "Aquecimentos",
        text: "aquecimentos",
        isActive: pathname === "/aquecimentos",
      },
      {
        href: "/vaccaj",
        title: "Vaccaj",
        text: "vaccaj",
        isActive: pathname === "/vaccaj",
      },
    ],
    [pathname]
  );

  return <Markup style={style} links={links} />;
}
