"use client"

import { useCallback, useContext, useRef, useEffect } from "react";

import { InstallPromptContext } from "../contexts/installPromptContext";

import { getCookie, setCookie } from "../helpers/cookies";

import config from "../configs";

export default function useInstallPromptContext (){
  const [state, setState] = useContext(InstallPromptContext);

  const deferredPrompt = useRef();

  const showInstallBanner = useCallback(() => {
    setState(true);
  }, [setState]);

  const hideInstallBanner = useCallback(() => {
    setState(false);
  }, [setState]);

  const handleInstall = useCallback(async () => {
    // Mostra prompt de instalação
    deferredPrompt.current.prompt();
    // Espera usuário responder ao prompt
    const { outcome } = await deferredPrompt.current.userChoice;
    // Opcionalmente, enviar evento analytics com resultado da escolha do usuário
    console.log(`User response to the install prompt: ${outcome}`);
    // Usamos o prompt e não podemos usar de novo; jogue fora
    deferredPrompt.current = null;
  }, []);

  const handleInstallClose = useCallback(() => {
    const cookieConsent = getCookie(config.cookies.cookieConsentKey);
    const saveChoice = cookieConsent === config.cookies.cookiesAllowedValue;
    if (saveChoice) {
      const exp = config.installBanner.displayDaysInterval;
      setCookie(config.cookies.installBannerDismissKey, true, exp);
    }
    setState(false);
  }, [setState]);

  useEffect(() => {
    //TODO: Check if app is installed before displaying banner.
    /* async function showInstallBanner() {
      const relatedApps = await navigator.getInstalledRelatedApps();

      relatedApps.forEach((app) => {
        console.log(app.id, app.platform, app.url);
      });
    }
    showInstallBanner(); */

    const onBeforeInstallPrompt = (e) => {
      
      // Impede que o mini-infobar apareça em mobile
      e.preventDefault();
      // Guarda evento para que possa ser disparado depois.
      deferredPrompt.current = e;

      const showBanner = Boolean(
        !getCookie(config.cookies.installBannerDismissKey)
      );

      // Atualiza UI notifica usuário que pode instalar PWA
      if (showBanner) showInstallBanner();
      // Opcionalmente, enviar eventos de analytics que promo de instalação PWA foi mostrado.
      console.log(`'beforeinstallprompt' event was fired.`);
    }

    const onAppInstalled = () => {
      // Esconder a promoção de instalação fornecida pela app
      hideInstallBanner();
      // Limpar o deferredPrompt para que seja coletado
      deferredPrompt.current = null;
      // Opcionalmente, enviar evento de analytics para indicar instalação com sucesso
      console.log("PWA was installed");
    }

    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.addEventListener("appinstalled", onAppInstalled);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
        window.removeEventListener("appinstalled", onAppInstalled);
      }
    }
  }, [showInstallBanner, hideInstallBanner]);

  return {
    showButton: state,
    handleInstall,
    handleInstallClose
  };
};