import Modulos from "@/models/Modulos";
import Songs from "@/models/Songs";
import SongPage from "@/components/general/song-page";
import configs from "@/configs";

export default async function Layout(props) {
  const songSlug = props.params.song;
  const moduloSlug = props.params.modulo;
  const modulo = moduloSlug ? await Modulos.getModuloAggregateBySlug(moduloSlug) : null;
  const song = songSlug ? await Songs.getSongAggregateBySlugAndModulo(songSlug, modulo) : null;
  return (
    <>
      <SongPage {...props} song={song} modulo={modulo} />;
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AudioObject",
            "@id": configs.metadata.url + song.url,
            url: configs.metadata.url + song.url,
            name: `${song.title}${song.beginning ? ` | ${song.beginning}` : ''}`,
            description: song.instructions,
            contentUrl: configs.metadata.url + song.recordings[0].file_path,
            encodingFormat: song.recordings[0].file_type,
            // duration: song.recordings[0].duration || "PT2M30S",       // if available
            // inLanguage: "it",                                        // adjust dynamically
            // datePublished: song.publish_date || "2025-09-07",
            // thumbnailUrl: song.thumbnail || "https://vaccaj.app/images/default-cover.jpg",
            author: {
              "@type": "Person",
              name: "Nicola Vaccaj"
            },
            publisher: {
              "@type": "Organization",
              name: "Vaccaj App",
              url: configs.metadata.url,
            },
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: "Vaccaj",
              url: configs.metadata.url + modulo.url
            }
          })
        }}
      />
    </>
  );
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
