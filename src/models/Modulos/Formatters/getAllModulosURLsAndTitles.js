import Modulos from "../../Modulos";

export default function getAllModulosURLsAndTitles(modulos) {
  return modulos.map((modulo) => ({
    title: modulo.title,
    url: Modulos.generateModuloURL(modulo)
  }));
}