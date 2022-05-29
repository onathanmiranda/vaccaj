import Head from "next/head";
import Script from "next/script";

import Player from "../components/organisms/player";
import Menu from "../components/organisms/menu";
import CookiesBanner from "../components/organisms/cookies-banner";

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
        <PlayerContextProvider>{children}</PlayerContextProvider>
      </LessonsContextProvider>
    </LocalStorageContext>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <Script id="cookies">
            {`function getCookie(cname) {
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
              }`}
          </Script>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="gtm" strategy="lazyOnload">
            {`
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
        <title>Vaccaj - Método Prático</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Acesse as músicas do método Vaccaj de maneira simplificada."
        />
      </Head>
      <ContextsWrapper>
        <Menu />
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
