"use client";

import Logo from '../components/atoms/logo';
import useInstallPromptContext from "../hooks/useInstallPromptContext";

import { button } from "../components/styles";

export default function HomePage(){
  
  const { handleInstall, showButton } = useInstallPromptContext();

  return (
    <div className="flex justify-center items-center pb-55">
      <div>
        <Logo className='w-233'/>
        {showButton && <button className={`${button} mx-auto mt-34`} onClick={handleInstall}>instalar como app</button>}
      </div>
    </div>
  );
}