import { useRouter } from "next/router";

import reducedData, { getItemById } from "../../data";
import { songs } from "../../data/data";

export default function Song({ staticData }) {
  const router = useRouter();

  const { id } = router.query;
  const song = getItemById(id, songs);
  return (
    <>
      <h1>{song.title}</h1>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      staticData: { ...reducedData },
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = songs.map((song) => ({
    params: { id: song.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
