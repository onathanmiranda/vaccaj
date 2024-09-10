export default function DatabaseFactory(Database) {
  const TableServiceFactory = (table) => {
    const ReadQueryBuilder = ({ select = "*", eq = [] }) => {
      const query = Database.from(table).select(select);

      if (eq.length) {
        eq.forEach((condition) => query.eq(...condition));
      }

      const Query = {
        run: async () => {
          const { data, error } = await query;
          if (error) throw error;
          return data;
        },
        dbQuery: query
      };

      return Query;
    };

    const TableService = {
      ReadQueryBuilder
    };

    return TableService;
  };

  return TableServiceFactory;
}
