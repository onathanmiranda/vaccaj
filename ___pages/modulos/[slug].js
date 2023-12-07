import Head from "next/head";

import SingleModule from "../../components/templates/single-module";

import config from "../../config";

import data from "../../data";

const { modules } = data;

export default function Module({ module, slug }) {
  return (
    <>
      <Head>
        <link key="canonical" rel="canonical" href={`https://vaccaj.app/modulos/${slug}`} />
        <title key="title">
          {module.title} | {config.siteTitle}
        </title>
        <meta
          key="meta-description"
          name="description"
          content={module.about.intro.substring(0, 259)}
        />
      </Head>
      <SingleModule module={module} /> 
    </>
  );
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  let module = modules.find(({ slug }) => slug === params.slug);
  return {
    props: {
      module,
      slug: params.slug
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = modules.map(({ slug }) => {
    return {
      params: {
        slug: slug,
      },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
