"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import Menu from "@/components/general/menu";
import Icon from "@/components/atoms/icon";

export default function Header({ modulos }) {
  const [text, setText] = useState("Free Palestine");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((oldText) =>
        oldText === "Free Palestine" ? "Stop the Genocide" : "Free Palestine"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [setText]);

  {
    /* <InstallPrompt /> */
  }
  return (
    <nav className="flex items-center lg:justify-between px-6 max-w-screen-lg w-full min-h-12">
      <div className="flex items-center w-full lg:w-auto justify-between gap-4">
        <Link
          className={
            "text-purple-50 flex items-center justify-between md:justify-start gap-2"
          }
          href="/modulos/vocalizes"
          title="Vaccaj Homepage"
        >
          <Icon.Logo className={"h-6 w-auto shrink-0"} />
        </Link>
        <div className="text-sm p-4 bg-zinc-800 rounded-full ml-2 h-3 text-gray-300 inline-flex items-center justify-end  gap-2">
          <Icon.Palestine className="inline-block w-6 h-6" />
          {text}
        </div>
      </div>
      <Menu modulos={modulos} className={`hidden lg:flex`} />
    </nav>
  );
}
