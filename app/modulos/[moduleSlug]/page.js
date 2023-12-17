import Modulo from '../../../components/templates/modulo';
import data, { getModuleBySlug } from "../../../data";
import configs from "../../../configs";

export default function Page({ params }) {
  const { moduleSlug } = params;
  const modulo = getModuleBySlug(moduleSlug);
  return <Modulo modulo={modulo} />
}

export async function generateMetadata({ params }) {
  const { moduleSlug } = params;
  const modulo = getModuleBySlug(moduleSlug);

  const { title } = modulo;
  const description = modulo.about.intro.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${moduleSlug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url
    }
  }
}

export async function generateStaticParams() {
  const { modules } = data;
  return modules.map(({ slug }) => slug);
}