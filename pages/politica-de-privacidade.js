import Head from "next/head";
import Privacy from "../components/organisms/privacy";

import config from "../config";

const title = `Política de Privacidade | ${config.siteTitle}`;

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nossa política de privacidade." />
      </Head>
      <main>
        <section>
          <Privacy />
        </section>
      </main>
    </>
  );
}
