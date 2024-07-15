import Supabase from "../../services/Supabase";
import Queries from "./Queries";
import Formatters from "./Formatters";
console.log(Formatters);
const table = "external_links";

async function runDatabaseQuery(query) {
  const { data, error } = await Supabase.from(table).select(query);
  if (error) throw error;
  return data;
}

const ExtenalLinks = {
  getAll: async () => {
    const query = Queries.getAll;
    const dataFormatter = Formatters.getAll;

    const data = await runDatabaseQuery(query);
    const formattedData = dataFormatter(data);

    return formattedData;
  }
};

export default ExtenalLinks;
