import Modulos from "@/models/Modulos";
import Songs from "@/models/Songs";
import ModuloSongPage from "@/components/general/modulo-song-page";

export default async function Layout(props) {
  const moduloSlug = props.params.modulo;
  const songSlug = props.params.song?.length ? props.params.song[0] : null;
  const modulo = await Modulos.getModulosAndRelationsBySlug(moduloSlug);
  const song = songSlug ? await Songs.getSongAndRelationsBySlug(songSlug) : null;
  return <ModuloSongPage {...props} song={song} modulo={modulo} />;
}

export async function generateMetadata({ params }) {
  const moduloSlug = params.modulo;
  const songSlug = params.song?.length ? params.song[0] : null;
  const modulo = await Modulos.getModulosAndRelationsBySlug(moduloSlug);
  const song = songSlug ? await Songs.getSongAndRelationsBySlug(songSlug) : null;

  const title = song ? `${song.beginning} - ${song.title}` : modulo.title;
  const description = song ? song.instructions : modulo.about.intro;
  const url = song ? song.url : modulo.url;
  
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
      url
    }
  }
}

export async function generateStaticParams() {
  const modulosAndSongSlugs = await Modulos.getAllModulosAndRelatedSongSlugs();
  const params = modulosAndSongSlugs.map((item) => {
    return {
      ...item,
      song: [item.song]
    }
  });
  return params;
}
