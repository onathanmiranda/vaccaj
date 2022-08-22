import { useEffect, useRef, useState, useCallback } from "react";

import Head from "next/head";
import Script from "next/script";

import Player from "../components/organisms/player";
import Menu from "../components/organisms/menu";
import CookiesBanner from "../components/organisms/cookies-banner";
import InstallPrompt from "../components/organisms/install-prompt";

import { getCookie, setCookie } from "../helpers/cookies";

import config from "../config";

import {
  LessonsContextProvider,
  PlayerContextProvider,
  LocalStorageContext,
} from "../contexts";

import "../theme/global.scss";
import styles from "./index.module.scss";
import "@material/react-material-icon/index.scss";

function ContextsWrapper({ children }) {
  return (
    <LocalStorageContext>
      <LessonsContextProvider>
          <PlayerContextProvider>
            {children}
          </PlayerContextProvider>
      </LessonsContextProvider>
    </LocalStorageContext>
  );
}

function MyApp({ Component, pageProps }) {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const deferredPrompt = useRef();

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
    if (!setShowInstallPrompt) return;
    const cookieConsent = getCookie(config.cookies.cookieConsentKey);
    const saveChoice = cookieConsent === config.cookies.cookiesAllowedValue;
    if (saveChoice) {
      const exp = config.installBanner.displayDaysInterval;
      setCookie(config.cookies.installBannerDismissKey, true, exp);
    }
    setShowInstallPrompt(false);
  }, [setShowInstallPrompt]);

  useEffect(() => {
    //TODO: Check if app is installed before displaying banner.
    /* async function showInstallBanner() {
      const relatedApps = await navigator.getInstalledRelatedApps();

      relatedApps.forEach((app) => {
        console.log(app.id, app.platform, app.url);
      });
    }
    showInstallBanner(); */

    if (!setShowInstallPrompt) return;
    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", (e) => {
        // Impede que o mini-infobar apareça em mobile
        e.preventDefault();
        // Guarda evento para que possa ser disparado depois.
        deferredPrompt.current = e;

        const showBanner = Boolean(
          !getCookie(config.cookies.installBannerDismissKey)
        );

        // Atualiza UI notifica usuário que pode instalar PWA
        if (showBanner) setShowInstallPrompt(true);
        // Opcionalmente, enviar eventos de analytics que promo de instalação PWA foi mostrado.
        console.log(`'beforeinstallprompt' event was fired.`);
      });

      window.addEventListener("appinstalled", () => {
        // Esconder a promoção de instalação fornecida pela app
        setShowInstallPrompt(false);
        // Limpar o deferredPrompt para que seja coletado
        deferredPrompt.current = null;
        // Opcionalmente, enviar evento de analytics para indicar instalação com sucesso
        console.log("PWA was installed");
      });
    }
  }, [setShowInstallPrompt]);

  return (
    <>
      <Script id="serviceworker">{`
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.register("/service-worker.js");
        }
      `}</Script>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="gtm" strategy="lazyOnload">
            {`
              function getCookie(cname) {
                let name = cname + "=";
                let ca = document.cookie.split(';');
                for(let i = 0; i < ca.length; i++) {
                  let c = ca[i];
                  while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                  }
                }
                return "";
              }
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              const allowed = getCookie('cookies-consent') === 'allowed';
              
              gtag('consent', 'default', {
                'ad_storage': allowed ? 'denied' : 'granted',
                'analytics_storage': allowed ? 'denied' : 'granted',
              });
              
              document.addEventListener("vaccaj-events-allowCookies", () => {
                gtag('consent', 'update', {
                  'ad_storage': 'granted',
                  'analytics_storage': 'granted',
                });
              });

              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `}
          </Script>
        </>
      )}
      <Head>
        <meta charset="UTF-8" />
        <title>{config.siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vaccaj.app/" />
        <meta name="theme-color" content="#19171c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content={config.siteTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="description"
          content="Estude vocalizes e vaccajs de forma simplificada."
        />
        <link rel="shortcut icon" sizes="180x180" href="/images/icon-180.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icon-32.png"
        />
        <link rel="manifest" href="/manifest.json"></link>

        {/* <!-- iPad retina portrait startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-1536.png"
          media="(device-width: 768px) and (device-height: 1024px)
                     and (-webkit-device-pixel-ratio: 2)
                     and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPad non-retina portrait startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-768.png"
          media="(device-width: 768px) and (device-height: 1024px)
                        and (-webkit-device-pixel-ratio: 1)
                        and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 6 Plus portrait startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-1242.png"
          media="(device-width: 414px) and (device-height: 736px)
                        and (-webkit-device-pixel-ratio: 3)
                        and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 6 startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-750.png"
          media="(device-width: 375px) and (device-height: 667px)
                        and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 5 startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-640.png"
          media="(device-width: 320px) and (device-height: 568px)
                        and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone < 5 retina startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-640.png"
          media="(device-width: 320px) and (device-height: 480px)
                        and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone < 5 non-retina startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-320.png"
          media="(device-width: 320px) and (device-height: 480px)
                        and (-webkit-device-pixel-ratio: 1)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <ContextsWrapper>
        <header style={{ position: "relative", zIndex: 1 }}>
          {showInstallPrompt && (
            <InstallPrompt
              onInstall={handleInstall}
              onClose={handleInstallClose}
            />
          )}
          <Menu style={{ top: showInstallPrompt ? 40 : 0 }} />
        </header>
        <Component {...pageProps} />
        <section className={styles.player}>
          <Player />
        </section>
        <CookiesBanner />
      </ContextsWrapper>
    </>
  );
}

export default MyApp;
