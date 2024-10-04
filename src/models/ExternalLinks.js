import SupabaseTable from "@/services/SupabaseTable";

class ExternalLinks extends SupabaseTable {
  static tableName = "external_links";

  constructor() {
    super(ExternalLinks.tableName);
  }

  async getAll() {
    try {
      return await this.runReadQuery({ select: "*" });
    } catch (error) {
      console.error("Error fetching all external links:", error);
      throw error;
    }
  }
}

export default new ExternalLinks();