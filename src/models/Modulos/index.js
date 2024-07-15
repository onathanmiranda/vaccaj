import Supabase from "../../services/Supabase";
import Queries from "./Queries";
import Formatters from "./Formatters";

import configs from "@/configs";

const table = "modules";

async function runDatabaseQuery(query) {
  const { data, error } = await Supabase.from(table).select(query);
  if (error) throw error;
  return data;
}

const Modulos = {
  getAll: async () => {
    const query = Queries.getAll;
    const dataFormatter = Formatters.getAll;

    const data = await runDatabaseQuery(query);
    const formattedData = dataFormatter(data);

    return formattedData;
  },
  getModuloBySlug: async (slug) => {
    const query = Queries.getModuloBySlug(slug);
    const dataFormatter = Formatters.getModuloBySlug;

    const data = await runDatabaseQuery(query);
    const formattedData = dataFormatter(data);

    return formattedData;
  },
  getAllModulosURLsAndTitles: async () => {
    const query = Queries.getAllModulosSlugsAndTitles;
    const dataFormatter = Formatters.getAllModulosURLsAndTitles;

    const data = await runDatabaseQuery(query);
    const formattedData = dataFormatter(data);

    return formattedData;
  },
  getAllModulosSlugsAndRelatedSongSlugs: async () => {
    const query = Queries.getAllModulosSlugsAndRelatedSongSlugs;
    const dataFormatter = Formatters.getAllModulosSlugsAndRelatedSongSlugs;

    const data = await runDatabaseQuery(query);
    const formattedData = dataFormatter(data);

    return formattedData;
  },
  generateModuloURL: (modulo) => {
    return `${configs.metadata.url}/modulos/${modulo.slug}`;
  }
};

export default Modulos;
