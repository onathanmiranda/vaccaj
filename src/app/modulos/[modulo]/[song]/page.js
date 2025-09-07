import Modulos from "@/models/Modulos";
import Songs from "@/models/Songs";
import SongPage from "@/components/general/song-page";

export default async function Layout(props) {
  const songSlug = props.params.song;
  const moduloSlug = props.params.modulo;
  const modulo = moduloSlug ? await Modulos.getModuloAggregateBySlug(moduloSlug) : null;
  const song = songSlug ? await Songs.getSongAggregateBySlugAndModulo(songSlug, modulo) : null;
  return <SongPage {...props} song={song} modulo={modulo} />;
}

export async function generateMetadata({ params }) {
  const songSlug = params.song;
  const moduloSlug = params.modulo;
  const modulo = await Modulos.getModuloAggregateBySlug(moduloSlug);
  const song = songSlug ? await Songs.getSongAggregateBySlugAndModulo(songSlug, modulo) : null;

  const title = `${song.beginning} - ${song.title}`;
  const description = song.instructions;
  const url = song.url;
  
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
      song: item.song
    }
  });
  return params;
}
