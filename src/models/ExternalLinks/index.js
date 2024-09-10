import Formatters from "./Formatters";

class ExternalLinks {
  static tableName = "external_links";
  constructor(TableServiceFactory) {
    this.TableService = TableServiceFactory(ExternalLinks.tableName);
  }
  getAll = async () => {
    const Query = this.TableService.ReadQueryBuilder({ select: "*" });
    const data = await Query.run();
    const formattedData = Formatters.getAll(data);
    return formattedData;
  };
}

export default ExternalLinks;
