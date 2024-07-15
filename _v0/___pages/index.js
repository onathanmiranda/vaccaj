import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";

export default function Home() {
  const router = useRouter();

  const redirectToPage = useCallback(
    (pathName = "/") => {
      if (typeof pathName !== "string") return;
      router.push(pathName);
    },
    [router]
  );

  useEffect(() => {
    redirectToPage("/modulos/aquecimentos");
  }, [redirectToPage]);

  return (
    <></>
  );
}
