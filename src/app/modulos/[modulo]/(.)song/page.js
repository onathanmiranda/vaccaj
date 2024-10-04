import Models from "@/models";
import SongPage from "@/components/general/song-page";

const { Modulos, Songs } = Models;

export default async function Layout(props) {
  const moduloSlug = props.params.modulo;
  const songSlug = props.params.song;
  const modulo = await Modulos.getModulosAndRelationsBySlug(moduloSlug);
  const song = await Songs.getSongAndRelationsBySlug(songSlug);
  return <p>{song.title}</p>;
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
  return await Models.Modulos.getAllModulosAndRelatedSongSlugs();
}
