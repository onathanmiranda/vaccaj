import Head from "next/head";

import Menu from "../../components/organisms/menu";

export default function Karaoke({ slug }) {
  return (
    <>
      <Head>
        <link key="canonical" rel="canonical" href={`https://vaccaj.app/karaoke`} />
        <title key="title">
          Sites de Karaokê
        </title>
        <meta
          key="meta-description"
          name="description"
          content="Use os sites abaixo para procurar pelo instrumental das músicas que você quer cantar"
        />
      </Head>
      <Menu />
      <iframe style={{
        height: "100%",
        width: "100%"
      }} src="https://youtube.com" />
    </>
  );
}
