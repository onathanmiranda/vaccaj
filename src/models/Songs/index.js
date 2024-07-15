/* import Supabase from "../../services/Supabase";

const table = "songs"; */

import configs from "@/configs";

/* async function runDatabaseQuery(query) {
  const { data, error } = await Supabase.from(table).select(query);
  if (error) throw error;
  return data;
} */

const Songs = {
  generateSongURL: (song, modulo) => {
    return `${configs.metadata.url}/modulos/${modulo.slug}/${song.slug}`;
  }
};

export default Songs;
