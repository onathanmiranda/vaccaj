import { useMemo } from "react";
import { useRouter } from "next/router";

import Markup from "./markup";

const linksArray = [
  {
    href: "/modulos/aquecimentos",
    title: "Aquecimentos",
    text: "aquecimentos",
  },
  {
    href: "/modulos/vaccaj",
    title: "Vaccaj",
    text: "vaccaj",
  },
];

export default function Menu({ style }) {
  const { asPath } = useRouter();

  let _links = useMemo(
    () =>
      linksArray.map((link) => ({
        ...link,
        isActive: asPath === link.href,
      })),
    [asPath]
  );

  return <Markup style={style} links={_links ? _links : linksArray} />;
}
