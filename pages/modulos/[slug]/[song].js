import SingleModuleSong from "../../../components/templates/single-module-song";

import modules, {
  getItemById,
  getReducedSongBySlug,
  reduceSongInfo,
} from "../../../data";

import { songs } from "../../../data/data";

export default function Song({ module, song, moduleSlug, songSlugOrId, description }) {
  return <SingleModuleSong song={song} module={module} pathname={`/modules/${moduleSlug}/${songSlugOrId}`} description={description} />;
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const module = modules.find(({ slug }) => slug === params.slug);

  let song = getReducedSongBySlug(params.song);

  if (!song) {
    const _song = getItemById(params.song, songs);
    if (_song) song = reduceSongInfo(_song);
  }

  const description = song.instructions || `Estude ${song.title}${song.beginning ? ` (${song.beginning}) ` : ' '}de forma simplificada.`

  return {
    props: {
      module,
      song,
      moduleSlug: params.slug,
      songSlugOrId: params.song,
      description
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = modules.reduce((acc, module) => {
    let modulePaths = [...acc];
    module.skills.forEach((skill) => {
      skill.lessons.forEach((lesson) => {
        lesson.songs.forEach((song) => {
          modulePaths.push({
            params: {
              slug: module.slug,
              song: song.slug ? song.slug : song.id,
            },
          });
        });
      });
    });
    return modulePaths;
  }, []);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
