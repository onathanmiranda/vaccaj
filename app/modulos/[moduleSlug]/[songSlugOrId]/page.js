import Song from '../../../../components/templates/song';

import { songs } from "../../../../data/learning";
import { getSongBySlugOrId, getModuleBySlug, getSongSkillAndLessonFromModulo } from "../../../../data";
import configs from "../../../../configs";

export default function Page({ params }) {
  const { songSlugOrId, moduleSlug } = params;

  const song = getSongBySlugOrId(songSlugOrId);
  const modulo = getModuleBySlug(moduleSlug);
  const { skill, lesson } = getSongSkillAndLessonFromModulo(song, modulo);

  return <Song song={song} modulo={modulo} skill={skill} lesson={lesson}/>
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