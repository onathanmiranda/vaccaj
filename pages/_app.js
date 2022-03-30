import Head from "next/head";
import Script from "next/script";
import "./style/global.scss";
import "@material/react-material-icon/index.scss";

import { LessonsContextProvider, PlayerContextProvider } from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="gtm" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
          </Script>
        </>
      )}
      <Head>
        <title>Vaccaj - Método Prático</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Acesse as músicas do método Vaccaj de maneira simplificada."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LessonsContextProvider>
        <PlayerContextProvider>
          <Component {...pageProps} />
        </PlayerContextProvider>
      </LessonsContextProvider>
    </>
  );
}

export default MyApp;
