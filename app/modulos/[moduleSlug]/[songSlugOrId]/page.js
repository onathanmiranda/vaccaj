import Modulo from '../../../../components/templates/modulo';
import { getModuleBySlug, getSongBySlugOrId } from "../../../../data";
import { songs } from "../../../../data/learning";
import configs from '../../../../configs';

export default function Page({ params }) {
  const { moduleSlug } = params;
  const modulo = getModuleBySlug(moduleSlug);
  return <Modulo modulo={modulo} />
}

export async function generateMetadata({ params }) {
  const { songSlugOrId, moduleSlug } = params;
  const song = getSongBySlugOrId(songSlugOrId);
  const { title } = song;
  const description = song.instructions.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${moduleSlug}/${songSlugOrId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url
    }
  }
}

export async function generateStaticParams() {
  return songs.map((song) => song.slug ? song.slug : song.id);
}