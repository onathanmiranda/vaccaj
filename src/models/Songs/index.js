import Modulos from "../Modulos";
import Formatters from "./Formatters";

class Songs {
  static tableName = "songs";
  static generateSongURL = (song, modulo) => {
    return `${Modulos.generateModuloURL(modulo)}/${song.slug}`;
  };
  constructor(TableServiceFactory) {
    this.TableService = TableServiceFactory(Songs.tableName);
  }

  getAll = async () => {
    const Query = this.TableService.ReadQueryBuilder({ select: "*" });
    const data = await Query.run();
    const formattedData = Formatters.getAll(data);
    return formattedData;
  };
  getSongAndRelatedDataBySlug = async (slug) => {
    const Query = this.TableService.ReadQueryBuilder({
      select: `
        *,
        songs_recordings(
          recordings (
            *,
            recordings_voice_types (
              voice_types (
                *
              )
            )
          )
        ),
        songs_sheets(
          sheets (
            sheets_voice_types (
              voice_types (
                *
              )
            )
          )
        )
      `,
      eq: [["slug", slug]]
    });
    const data = await Query.run();
    const formattedData = Formatters.getSongAndRelatedDataBySlug(data);
    return formattedData;
  };
}

export default Songs;
