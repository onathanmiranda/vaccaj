import Head from "next/head";
import Script from "next/script";

import CookiesBanner from "../components/organisms/cookies-banner";

import config from "../config";

import {
  LessonsContextProvider,
  PlayerContextProvider,
  LocalStorageContext,
  InstallPromptContextProvider
} from "../contexts";

import "../theme/global.scss";
import "@material/react-material-icon/index.scss";

function ContextsWrapper({ children }) {
  return (
    <LocalStorageContext>
      <LessonsContextProvider>
          <PlayerContextProvider>
            <InstallPromptContextProvider>
              {children}
            </InstallPromptContextProvider>
          </PlayerContextProvider>
      </LessonsContextProvider>
    </LocalStorageContext>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="serviceworker">{`
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.register("/service-worker.js");
        }
      `}</Script>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE && (
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`} crossorigin="anonymous"></Script>
      )}
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#19171c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content={config.siteTitle} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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
          media="(device-width: 768px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPad non-retina portrait startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-768.png"
          media="(device-width: 768px) and (-webkit-device-pixel-ratio: 1) and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 6 Plus portrait startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-1242.png"
          media="(device-width: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 6 startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-750.png"
          media="(device-width: 375px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone 5 startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-640.png"
          media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone < 5 retina startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-640.png"
          media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />

        {/* <!-- iPhone < 5 non-retina startup image --> */}
        <link
          href="/assets/startup/apple-touch-startup-image-320.png"
          media="(device-width: 320px) and (-webkit-device-pixel-ratio: 1)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <ContextsWrapper>
        <Component {...pageProps} />
        <CookiesBanner />
      </ContextsWrapper>
    </>
  );
}

export default MyApp;
