"use client";

import { useSearchParams } from "next/navigation";

export default function Body({ children }){
  const searchParams = useSearchParams();
  const isShowingInstructions = searchParams.has('instructions');

  return (
    <body
      className={
        `sans bg-white text-black text-base leading-none 
        relative scroll-smooth ${isShowingInstructions ? "overflow-hidden" : ""}`
      }
    >
      {children}
    </body>
  );
}