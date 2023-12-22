import Modulo from "../../../../components/templates/modulo";

import { getModuloBySlug, getSongBySlugOrId } from "../../../../data";
import { songs } from "../../../../data/learning";
import configs from "../../../../configs";

export default function Page({ params }){
  return (
    <Modulo />
  );
}

export async function generateMetadata({ params }) {
  const { moduloSlug, songSlug } = params;
  const song = getSongBySlugOrId(songSlug);
  

  const { title } = song;
  const description = song.instructions;
  const url = `${configs.metadata.url}/modulos/${moduloSlug}/${songSlug}`;

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
}

export async function generateStaticParams(){
  return songs.map(({ slug }) => ({ songSlug: slug }));
}