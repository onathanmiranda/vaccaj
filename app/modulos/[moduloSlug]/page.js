import Modulo from "../../../components/templates/modulo";
import { getModuloBySlug } from "../../../data";

import data from "../../../data";
import configs from "../../../configs";

export default function Page({ params }){
  return (
    <Modulo />
  );
}

export async function generateMetadata({ params }) {
  const { moduloSlug } = params;
  const modulo = getModuloBySlug(moduloSlug);

  const { title } = modulo;
  const description = modulo.about.intro.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${moduloSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url
    },
    twitter: {
      title,
      description,
    }
  }
}

export async function generateStaticParams() {
  const { modules } = data;
  return modules.map(({ slug }) => ({ moduloSlug: slug }));
}