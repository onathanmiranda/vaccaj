import Modulo from '../../../components/templates/modulo';
import data from "../../../data";
import configs from "../../../configs";

function getModuleBySlug(slug){
  return  data.modules.find((module) => module.slug === slug);
}

export default function Page({ params }) {
  const { slug } = params;
  const modulo = getModuleBySlug(slug);
  return <Modulo modulo={modulo} />
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const modulo = getModuleBySlug(slug);

  const { title } = modulo;
  const description = modulo.about.intro.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${slug}`;

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