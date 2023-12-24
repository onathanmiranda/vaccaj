import { useState } from "react";

export default function SongSheet({ sheetURLs }){
  const [enlarged, setEnlarged] = useState();

  if(!Array.isArray(sheetURLs)) return null;
  
  return (
    <>
      <div 
        className="block text-right px-21 py-8 mt-34 lowercase text-highlight text-sm mx-auto max-w-lg font-light"
      >
        {`Clique na imagem para ${ enlarged ? "diminuir" : "ampliar" }`}
      </div>
      <section onClick={() => setEnlarged(oldState => !oldState)} className={`relative mb-34 w-full px-21 ${enlarged ? "overflow-x-scroll lg:overflow-hidden" : "max-w-5xl mx-auto"}`}>
        {sheetURLs.map((src) => {
          return ( 
            <img 
              key={src} 
              src={src} 
              alt="" 
              className={`
                ${enlarged ? "w-[250vw] max-w-none lg:max-w-full lg:w-full" : "lg:hover:scale-105"} 
                lg:transition-transform lg:cursor-pointer
              `} 
            />
          );
        })}
      </section>
    </>
  );
}