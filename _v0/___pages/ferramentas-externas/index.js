import Head from "next/head";

import Tools from "../../components/templates/tools";

import data from "../../database";

export default function FerramentasExternas({ tools }) {
  return (
    <>
      <Head>
        <link key="canonical" rel="canonical" href={`https://vaccaj.app/ferramentas`} />
        <title key="title">
          Ferramentas Externas
        </title>
        <meta
          key="meta-description"
          name="description"
          content="Use os sites abaixo para procurar pelo instrumental das músicas que você quer cantar"
        />
      </Head>
      <Tools tools={tools} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      tools: data.tools
    },
  };
}