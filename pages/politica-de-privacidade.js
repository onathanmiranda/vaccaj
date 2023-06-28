import Head from "next/head";
import Privacy from "../components/organisms/privacy";
import Navbar from "../components/organisms/navbar";

import config from "../config";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | {config.siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nossa política de privacidade." />
      </Head>
      <main>
        <Navbar />
        <section>
          <Privacy />
        </section>
      </main>
    </>
  );
}
