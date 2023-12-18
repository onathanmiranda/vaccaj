import Modulo from '../../../../components/templates/modulo';
import data, { getModuleBySlug, getSongBySlugOrId } from "../../../../data";

export default function Page({ params }) {
  const { moduleSlug } = params;
  const modulo = getModuleBySlug(moduleSlug);
  return <Modulo modulo={modulo} />
}

export async function generateStaticParams() {
  const { modules } = data;
  return modules.map(({ slug }) => slug);
}