import { Supabase } from "@/services";
import DatabaseFactory from "./DatabaseFactory";

import Modulos from "./Modulos";
import Songs from "./Songs";
import ExtenalLinks from "./ExternalLinks";

const TableServiceFactory = DatabaseFactory(Supabase);

const Models = {
  Modulos: new Modulos(TableServiceFactory),
  Songs: new Songs(TableServiceFactory),
  ExternalLinks: new ExtenalLinks(TableServiceFactory)
};

export default Models;
