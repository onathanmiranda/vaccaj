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
      <section onClick={() => setEnlarged(oldState => !oldState)} className={`mx-auto relative mb-34 w-full px-21 ${enlarged ? "overflow-x-scroll lg:overflow-hidden max-w-full" : "max-w-5xl"} transition[max-width] duration-1000`}>
        {sheetURLs.map((src) => {
          return ( 
            <img 
              key={src} 
              src={src} 
              alt="" 
              className={`
                ${enlarged ? "max-w-[250vw] lg:max-w-full " : "max-w-full lg:hover:scale-105"} 
                lg:cursor-pointer motion-safe:transition-all motion-safe:duration-1000 w-[250vw] lg:w-full
              `} 
            />
          );
        })}
      </section>
    </>
  );
}