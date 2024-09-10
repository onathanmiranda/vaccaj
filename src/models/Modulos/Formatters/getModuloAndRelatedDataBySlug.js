import Songs from "@/models/Songs";

export default function getModuloAndRelatedDataBySlug(data) {
  const formattedData = {};

  const [ modulo ] = data;
  const { title, slug, about, modules_lessons } = modulo;

  formattedData.title = title;
  formattedData.slug = slug;
  formattedData.about = about;
  
  formattedData.lessons = modules_lessons.map(({ lessons: lesson }) => {
    return ({
      id: lesson.id,
      title: lesson.title,
      skill: {
        id: lesson.skills.id,
        title: lesson.skills.title
      },
      songs: lesson.lessons_songs.map(({ songs: song }) => ({
        id: song.id,
        title: song.title,
        url: Songs.generateSongURL(song, modulo),
        beginning: song.beginning
      }))
    });
  });

  return formattedData;
}
/*
import Songs from "@/models/Songs";

export default function getModuloAndRelatedDataBySlug(data) {
  const formattedData = {};

  const [ modulo ] = data;
  const { title, slug, about, modules_lessons } = modulo;

  formattedData.title = title;
  formattedData.slug = slug;
  formattedData.about = about;
  
  const skills = new Map();

  modules_lessons.forEach(({ lessons: lesson }) => {
    const lessonSongs = lesson.lessons_songs.map(({ songs: song }) => ({
      id: song.id,
      title: song.title,
      url: Songs.generateSongURL(song, modulo),
      beginning: song.beginning
    }));

    if(skills.has(lesson.skills.id)){
      const skill = skills.get(lesson.skills.id);
      skills.set(lesson.skills.id, {
        ...skill,
        songs: [
          ...skill.songs,
          ...lessonSongs
        ]
      });
    } else {
      skills.set(lesson.skills.id, {
        id: lesson.skills.id,
        title: lesson.skills.title,
        songs: []
      });
    }
  });
  
  formattedData.lessons = modules_lessons.map(({ lessons: lesson }) => {
    return ({
      id: lesson.id,
      title: lesson.title,
      skill: skills.get(lesson.skills.id)
    });
  });

  return formattedData;
}
*/