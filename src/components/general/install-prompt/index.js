'use client';

import { useCallback } from "react";
import Icon from "@/components/atoms/icon";
import usePWA from "@/hooks/usePWA";

// const LOCALSTORAGE_DISMISS_KEY = 'install-banner-dismiss';

/* function isOlderThan30Days(dateInMilliseconds) {
  const currentTime = new Date().getTime();
  const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
  const thirtyDaysAgo = currentTime - thirtyDaysInMilliseconds;
  return dateInMilliseconds < thirtyDaysAgo;
} */

export default function InstallPrompt() {
  const { isInstalled, isStandalone, handleInstall } = usePWA();

  const onDismiss = useCallback(() => {
    
  }, []);

  const onInstall = useCallback(async () => {
    handleInstall();
  }, [handleInstall]);

  if(isInstalled || isStandalone) return null;

  return (
    <aside className={'italic text-zinc-500 w-full max-w-screen-lg text-xs flex justify-end items-center bg-zinc-900 py-2 px-5'}>
      <p>Você pode instalar o Vaccaj como um app:</p>
      <button className="underline ml-4 hover:text-zinc-300 transition-colors duration-300" onClick={onInstall}>instalar</button>
      <button className="ml-4 hover:text-zinc-300 transition-colors duration-300" onClick={onDismiss}><Icon.Cancel className="h-4 w-4"/></button>
    </aside>
  );
}