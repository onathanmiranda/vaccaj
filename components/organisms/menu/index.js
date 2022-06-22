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
  {
    href: "/modulos/belting",
    title: "Belting",
    text: "belting",
  },
];

export default function Menu({ style }) {
  const router = useRouter();
  const { asPath } = router;
  let _links = useMemo(
    () =>
      linksArray.map((link) => {
        return {
          ...link,
          isActive: asPath.includes(link.href),
        };
      }),
    [asPath]
  );

  return <Markup style={style} links={_links ? _links : linksArray} />;
}
