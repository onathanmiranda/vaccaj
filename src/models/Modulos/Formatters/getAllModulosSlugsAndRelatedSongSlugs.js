export default function getAllModulosSlugsAndRelatedSongSlugs(modules) {
  return modules.reduce((acc, module) => {
    const result = {
      slug: module.slug
    };

    result.songs = module.modules_lessons.reduce((prev, module_lesson) => {
      module_lesson.lessons.lessons_songs.forEach((lesson_song) => {
        prev.push({ slug: lesson_song.songs.slug });
      });
      return prev;
    }, []);

    acc.push(result);
    return acc;
  }, []);
}
