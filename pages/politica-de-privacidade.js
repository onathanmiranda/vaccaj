import Head from "next/head";
import Privacy from "../components/organisms/privacy";
import styles from "./index.module.scss";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Vaccaj - Método Prático - Política de Privacidade</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nossa política de privacidade." />
      </Head>
      <main className={styles.main}>
        <section className={styles.lessons}>
          <Privacy />
        </section>
      </main>
    </>
  );
}
