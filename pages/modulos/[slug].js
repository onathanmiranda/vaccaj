import SingleModule from "../../components/templates/single-module";

import modules from "../../data";

export default function Song({ module }) {
  return <SingleModule module={module} />;
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  let module = modules.find(({ slug }) => slug === params.slug);

  return {
    props: {
      module,
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
