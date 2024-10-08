import Models from "@/models";
import ModuloSongPage from "@/components/general/modulo-song-page";

const { Modulos, Songs } = Models;

export default async function Layout(props) {
  const moduloSlug = props.params.modulo;
  const songSlug = props.params.song?.length ? props.params.song[0] : null;
  const modulo = await Modulos.getModulosAndRelationsBySlug(moduloSlug);
  const song = songSlug ? await Songs.getSongAndRelationsBySlug(songSlug) : null;
  return <ModuloSongPage {...props} song={song} modulo={modulo} />;
}

/* export async function generateMetadata({ params }) {
  const { moduloSlug } = params;
  const modulo = getModuloBySlug(moduloSlug);

  const { title } = modulo;
  const description = modulo.about.intro.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${moduloSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url
    },
    twitter: {
      title,
      description,
    }
  }
} */

export async function generateStaticParams() {
  const modulosAndSongSlugs = await Models.Modulos.getAllModulosAndRelatedSongSlugs();
  const params = modulosAndSongSlugs.map((item) => {
    return {
      ...item,
      song: [item.song]
    }
  });
  return params;
}
