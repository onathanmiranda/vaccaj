import Formatters from "./Formatters";
import configs from "@/configs";

class Modulos {
  static tableName = "modules";
  static modulosPath = "modulos";

  static generateModuloURL = (modulo) => {
    return `${configs.metadata.url}/${Modulos.modulosPath}/${modulo.slug}`;
  };

  constructor(TableServiceFactory) {
    this.TableService = TableServiceFactory(Modulos.tableName);
  }

  getAll = async () => {
    const Query = this.TableService.ReadQueryBuilder({ select: "*" });
    const data = await Query.run();
    const formattedData = Formatters.getAll(data);
    return formattedData;
  };

  getModuloBySlug = async (slug) => {
    const Query = this.TableService.ReadQueryBuilder({
      select: "*",
      eq: [[`slug`, slug]]
    });
    const data = await Query.run();
    const formattedData = Formatters.getModuloBySlug(data);
    return formattedData;
  };

  getModuloAndRelatedDataBySlug = async (slug) => {
    const Query = this.TableService.ReadQueryBuilder({
      select: `
        title,
        slug,
        about,
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
      eq: [[`slug`, slug]]
    });
    const data = await Query.run();
    const formattedData = Formatters.getModuloAndRelatedDataBySlug(data);
    return formattedData;
  };

  getAllModulosURLsAndTitles = async () => {
    const Query = this.TableService.ReadQueryBuilder({
      select: "title, slug"
    });
    const dataFormatter = Formatters.getAllModulosURLsAndTitles;
    const data = await Query.run();
    const formattedData = dataFormatter(data);
    return formattedData;
  };

  getAllModulosAndRelatedSongURLs = async () => {
    const Query = this.TableService.ReadQueryBuilder({
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
      `
    });
    const dataFormatter = Formatters.getAllModulosAndRelatedSongURLs;
    const data = await Query.run();
    const formattedData = dataFormatter(data);
    return formattedData;
  };
}

export default Modulos;
