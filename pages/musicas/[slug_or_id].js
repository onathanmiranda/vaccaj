import SingleSong from "../../components/templates/single-song";

import { getItemById, getReducedSongBySlug, reduceSongInfo } from "../../data";
import { songs } from "../../data/data";

export default function Song({ song, slug_or_id, description }) {
  return (
    <SingleSong song={song} pathname={`/musicas/${slug_or_id}`} description={description} />
  );
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  let song = getReducedSongBySlug(params.slug_or_id);

  if (!song) {
    const _song = getItemById(params.slug_or_id, songs);
    if (_song) song = reduceSongInfo(_song);
  }

  const description = song.instructions || `Estude${song.title} ${song.beginning ? ` (${song.beginning}) ` : ' '}de forma simplificada.`

  return {
    props: {
      song,
      slug_or_id: params.slug_or_id,
      description
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = songs.map(({ slug, id }) => {
    return {
      params: {
        slug_or_id: slug ? slug : id,
      },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
