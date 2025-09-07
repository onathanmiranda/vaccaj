import SupabaseTable from "@/services/SupabaseTable";
import Modulos from "@/models/Modulos";

class Songs extends SupabaseTable {
  static tableName = "songs";

  constructor() {
    super(Songs.tableName);
  }

  generateSongURL(song, modulo) {
    if (!song || typeof song !== 'object' || !song.slug) {
      throw new Error("A valid 'song' object with a 'slug' property is required. Received: " + song);
    }

    if (!modulo || typeof modulo !== 'object' || !modulo.slug) {
      throw new Error("A valid 'modulo' object with a 'slug' property is required. Received: " + modulo);
    }

    return `${Modulos.generateModuloURL(modulo)}/${song.slug}`;
  }

  async getAll() {
    try {
      return await this.runReadQuery({ select: "*" });
    } catch (error) {
      console.error("Error fetching all songs:", error);
      throw error;
    }
  }

  async getSongAggregateBySlugAndModulo(songSlug, modulo) {
    if (!songSlug || typeof songSlug !== "string") {
      throw new Error("A valid 'slug' parameter is required.");
    }

    try {
      const data = await this.runReadQuery({
        select: `
          id,
          title,
          slug,
          beginning,
          instructions,
          lyrics,
          lyrics_translation,
          songs_recordings (
            recordings (
              id,
              file_type,
              file_path,
              has_instruments,
              has_vocals,
              recordings_voice_types (
                voice_types (
                  id,
                  title
                )
              )
            )
          ),
          songs_sheets (
            sheets (
              id,
              image_files,
              sheets_voice_types (
                voice_types (
                  id,
                  title
                )
              )
            )
          )
        `,
        eq: [["slug", songSlug]],
      });

      if (!data || data.length === 0) {
        throw new Error(`Song with slug "${songSlug}" not found.`);
      }

      const [song] = data;
      
      return {
        id: song.id,
        title: song.title,
        slug: song.slug,
        beginning: song.beginning,
        instructions: song.instructions,
        lyrics: song.lyrics,
        lyricsTranslation: song.lyrics_translation,
        url: this.generateSongURL(song, modulo), // Placeholder modulo slug
        recordings: song.songs_recordings.map((sr) => {
          const recording = sr.recordings;
          return {
            id: recording.id,
            file_path: recording.file_path,
            file_type: recording.file_type,
            has_vocals: recording.has_vocals,
            has_instruments: recording.has_instruments,
            voice_types: recording.recordings_voice_types.map((rv) => {
              const voice_type = rv.voice_types;
              return {
                id: voice_type.id,
                title: voice_type.title,
              };
            }),
          };
        }),
        sheets: song.songs_sheets.map((ss) => {
          const sheet = ss.sheets;
          return {
            id: sheet.id,
            image_files: sheet.image_files.map((image) => ({
              path: image.path,
              order: image.order,
            })),
            voice_types: sheet.sheets_voice_types.map((sv) => {
              const voice_type = sv.voice_types;
              return {
                id: voice_type.id,
                title: voice_type.title,
              };
            }),
          };
        }),
      };
    } catch (error) {
      console.error(`Error fetching song with slug "${slug}":`, error);
      throw error;
    }
  }
}

const SongInstance = new Songs();

export default SongInstance;