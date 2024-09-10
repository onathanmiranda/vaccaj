import Songs from "../../Songs";
import Modulos from "../../Modulos";

export default function getAllModulosAndRelatedSongURLs(modulos) {
  return modulos.reduce((acc, modulo) => {
    const result = {
      url: Modulos.generateModuloURL(modulo)
    };

    result.songs = modulo.modules_lessons.reduce((prev, modulo_lesson) => {
      modulo_lesson.lessons.lessons_songs.forEach((song) => {
        prev.push({
          url: Songs.generateSongURL(song.songs, modulo)
        });
      });
      return prev;
    }, []);

    acc.push(result);
    return acc;
  }, []);
}
