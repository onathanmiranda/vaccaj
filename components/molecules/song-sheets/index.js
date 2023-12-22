import { useState } from "react";

export default function SongSheet({ sheetURLs }){
  const [enlarged, setEnlarged] = useState();

  if(!Array.isArray(sheetURLs)) return null;
  
  return (
    <section onClick={() => setEnlarged(oldState => !oldState)} className={`my-34 w-full px-21 ${enlarged ? "overflow-x-scroll lg:overflow-hidden" : "max-w-5xl mx-auto"}`}>
      {sheetURLs.map((src) => {
        return ( 
          <img key={src} src={src} alt="" className={`${enlarged ? "w-[250vw] max-w-none lg:max-w-full lg:w-full" : ""}`} />
        );
      })}
    </section>
  );
}