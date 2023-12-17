import {
  voiceTypes,
  voiceTypeOrderById,
  speeds,
  recordings,
  songs,
  skills,
  lessons,
  sheets,
  modules,
} from './learning';

import tools from './externalTools';

export function getReducedSongBySlug(songSlug) {
  const song = songs.find(({ slug }) => slug === songSlug);
  if (song) return reduceSongInfo(song);
  return song;
}

export function getItemById(itemId, collection) {
  return collection.find(({ id }) => id === itemId);
}

export function reduceRecordingInfo(recording, sheetsList) {
  const { id, filePath, voiceType, speedId, type, accompaniment, vocals } =
    recording;

  const sheets = sheetsList
    ? sheetsList.find((item) => item.voiceTypes.includes(voiceType)) || null
    : null;

  return {
    id,
    filePath,
    type,
    voiceType: getItemById(voiceType, voiceTypes),
    speed: getItemById(speedId, speeds),
    sheets,
    accompaniment,
    vocals,
  };
}

export function reduceSongInfo({
  id,
  title,
  slug,
  beginning,
  recordingIds,
  lyrics,
  sheetsList,
  instructions,
}) {
  let _sheetsList = sheetsList
    ? sheetsList.map((id) => {
        return getItemById(id, sheets);
      })
    : null;

  let song = {
    id,
    title,
    slug,
    beginning,
    lyrics,
    instructions,
    recordings: recordingIds
      .map((id) => getItemById(id, recordings))
      .map((recording) => reduceRecordingInfo(recording, _sheetsList))
      .sort((a, b) => {
        const a_index = voiceTypeOrderById.findIndex(
          (i) => a.voiceType.id === i
        );
        const b_index = voiceTypeOrderById.findIndex(
          (i) => b.voiceType.id === i
        );
        return a_index - b_index;
      }),
  };

  song.speedOptions = song.recordings.reduce((acc, curr) => {
    let nextAcc = [...acc];
    const { speed } = curr;

    if (!nextAcc.length) {
      nextAcc.push(speed);
      return nextAcc;
    }
    if (nextAcc.find(({ id }) => id === speed.id)) {
      return nextAcc;
    }
    nextAcc.push(speed);
    return nextAcc;
  }, []);

  song.voiceTypesOptions = song.recordings
    .map((recording) => recording.voiceType)
    .map((voiceType) => {
      if (!voiceType) return null;

      const recordings = song.recordings
        .filter((recording) => recording.voiceType.id === voiceType.id)
        .map((recording) => ({
          ...recording,
          instrumentsOptionsTitle:
            recording.accompaniment && recording.vocals
              ? "Voz"
              : "Instrumentos",
        }));

      return {
        voiceType,
        recordings,
      };
    })
    .reduce((acc, curr) => {
      if (!curr) return acc;
      if (acc.find(({ voiceType }) => voiceType.id === curr.voiceType.id)) {
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);

  return song;
}

export function reduceLessonInfo({ id, title, skillId, songIds }) {
  return {
    id,
    title,
    skillId,
    songs: songIds.map((id) => getItemById(id, songs)).map(reduceSongInfo),
  };
}

export function joinSkillsAndLessons(skill, lessons) {
  const { title, id } = skill;
  return {
    title,
    id,
    lessons: lessons
      .filter(({ skillId }) => {
        return skillId === id;
      })
      .map(reduceLessonInfo),
  };
}

export function getSkillsFromLessons(lessons, skills) {
  const skillsIds = lessons.reduce((acc, curr) => {
    if (acc.includes(curr.skillId)) return acc;
    acc.push(curr.skillId);
    return acc;
  }, []);
  return skillsIds.map((id) => getItemById(id, skills));
}

export function reduceModuleInfo({ id, title, lessonsIds, slug, about, backgroundImageUrl }) {
  const moduleLessons = lessonsIds.map((id) => getItemById(id, lessons));
  const modulesSkills = getSkillsFromLessons(moduleLessons, skills);
  const modulo = {
    id,
    title,
    slug,
    about,
    backgroundImageUrl,
    skills: modulesSkills.map((skill) =>
      joinSkillsAndLessons(skill, moduleLessons)
    ),
  };

  modulo.skills = modulo.skills.map((skill) => ({
    ...skill,
    lessons: skill.lessons.map((lesson) => ({
      ...lesson,
      songs: lesson.songs.map((song) => ({
        ...song,
        href: `/modulos/${modulo.slug}/${song.slug || song.id}`
      }))
    }))
  }))

  return modulo;
}

export function reduceData(entrypoint, entryPointReducer) {
  return entrypoint.map(entryPointReducer);
}

const reducedModules = reduceData(modules, reduceModuleInfo);

const data = {
  modules: reducedModules,
  tools
};

export function getModuleBySlug(moduleSlug){
  return reducedModules.find((module) => module.slug === moduleSlug);
}

export function getSongBySlugOrId(songSlugOrId){
  const song = songs.find((song) => song.slug === songSlugOrId || song.id === songSlugOrId);
  const songReducedData = reduceSongInfo(song);
  return songReducedData;
}

export function getModuleSongs(modulo){
  const songs = modulo.skills.reduce((acc, skill) => {
    skill.lessons.forEach((lesson) => {
      lesson.songs.forEach((song) => acc.push(song));
    });
    return acc;
  }, []);
  return songs;
}

export function getSongSkillAndLessonFromModulo(song, modulo){
  const skillAndLesson = modulo.skills.reduce((acc, skill) => {
    if(acc.skill && acc.lesson) return acc;
    
    skill.lessons.forEach((lesson) => {
      const lessonHasSong = lesson.songs.find((item) => item.id === song.id);
      if(lessonHasSong) acc = { skill, lesson };
    });
    return acc;
  }, {});

  return skillAndLesson;
}

export default data;
