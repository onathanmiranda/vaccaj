import SupabaseTable from "@/services/SupabaseTable";
import Songs from "@/models/Songs";
import configs from "@/configs";

class Modulo extends SupabaseTable {
  static tableName = "modules";

  constructor() {
    super(Modulo.tableName);
  }

  generateModuloURL(modulo) {
    if (!modulo || typeof modulo !== 'object' || !modulo.slug) {
      throw new Error("A valid 'modulo' object with a 'slug' property is required.");
    }

    return `${configs.metadata.url}/modulos/${modulo.slug}`;
  }

  async getAll() {
    try {
      return await this.runReadQuery({ select: "*" });
    } catch (error) {
      console.error("Error fetching all modulos:", error);
      throw error;
    }
  }

  async getModuloBySlug(slug) {
    if (!slug || typeof slug !== "string") {
      throw new Error("A valid 'slug' parameter is required.");
    }

    try {
      const data = await this.runReadQuery({
        select: "*",
        eq: [[`slug`, slug]],
      });

      if (!data || data.length === 0) {
        throw new Error(`Modulo with slug "${slug}" not found.`);
      }

      return data[0];
    } catch (error) {
      console.error(`Error fetching modulo with slug "${slug}":`, error);
      throw error;
    }
  }

  async getModulosAndRelationsBySlug(slug) {
    if (!slug || typeof slug !== "string") {
      throw new Error("A valid 'slug' parameter is required.");
    }

    try {
      const data = await this.runReadQuery({
        select: `
          title,
          slug,
          about,
          short_title,
          modules_lessons (
            lessons (
              id,
              title,
              skills (
                id,
                title
              ),
              lessons_songs(
                songs (
                  id,
                  title,
                  slug,
                  beginning
                )
              )
            )
          )
        `,
        eq: [[`slug`, slug]],
      });

      if (!data || data.length === 0) {
        throw new Error(`Modulo with slug "${slug}" not found.`);
      }

      const [modulo] = data;
      const { title, slug: moduloSlug, about, modules_lessons, short_title } = modulo;
      const moduloSongs = [];

      const formattedData = {
        title,
        slug: moduloSlug,
        about,
        short_title,
        url: this.generateModuloURL(modulo),
        lessons: modules_lessons.map(({ lessons: lesson }) => ({
          id: lesson.id,
          title: lesson.title,
          skill: {
            id: lesson.skills.id,
            title: lesson.skills.title,
          },
          songs: lesson.lessons_songs.map(({ songs: song }) => {
            const songData = {
              id: song.id,
              title: song.title,
              slug: song.slug,
              url: Songs.generateSongURL(song, modulo), // Corrected line
              beginning: song.beginning
            };
            moduloSongs.push(songData);
            return songData;
          }),
        })),
      };

      formattedData.songs = moduloSongs;
      return formattedData;
    } catch (error) {
      console.error(
        `Error fetching modulo and relations with slug "${slug}":`,
        error
      );
      throw error;
    }
  }

  async getAllModulosURLsAndTitles() {
    try {
      const data = await this.runReadQuery({
        select: "title, slug, short_title",
      });

      return data.map((modulo) => ({
        title: modulo.title,
        short_title: modulo.short_title,
        url: this.generateModuloURL(modulo),
        slug: modulo.slug,
      }));
    } catch (error) {
      console.error("Error fetching all modulos URLs and titles:", error);
      throw error;
    }
  }

  async getAllModulosAndRelatedSongURLs() {
    try {
      const data = await this.runReadQuery({
        select: `
          slug,
          modules_lessons (
            lessons (
              lessons_songs(
                songs (
                  slug
                )
              )
            )
          )
        `,
      });

      return data.map((modulo) => {
        const moduloUrl = Modulo.generateModuloURL(modulo);
        const songs = modulo.modules_lessons.flatMap((moduloLesson) =>
          moduloLesson.lessons.lessons_songs.map((song) => ({
            url: Songs.generateSongURL(song.songs, modulo),
          }))
        );
        return { url: moduloUrl, songs };
      });
    } catch (error) {
      console.error(
        "Error fetching all modulos and related song URLs:",
        error
      );
      throw error;
    }
  }

  async getAllModulosAndRelatedSongSlugs() {
    try {
      const data = await this.runReadQuery({
        select: `
          slug,
          modules_lessons (
            lessons (
              lessons_songs(
                songs (
                  slug
                )
              )
            )
          )
        `,
      });

      return data.flatMap((modulo) =>
        modulo.modules_lessons.flatMap((moduloLesson) =>
          moduloLesson.lessons.lessons_songs.map((lessonSong) => ({
            modulo: modulo.slug,
            song: lessonSong.songs.slug,
          }))
        )
      );
    } catch (error) {
      console.error(
        "Error fetching all modulos and related song slugs:",
        error
      );
      throw error;
    }
  }
}

export default new Modulo();