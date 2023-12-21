import Modulo from "../../../../components/templates/modulo";

import { getModuloBySlug } from "../../../../data";
import { songs } from "../../../../data/learning";
import configs from "../../../../configs";

export default function Page({ params }){
  const { moduloSlug } = params;
  const modulo = getModuloBySlug(moduloSlug);
  
  return (
    <Modulo modulo={modulo} />
  );
}

export async function generateMetadata({ params }) {
  const { moduloSlug, songSlug } = params;
  const modulo = getModuloBySlug(moduloSlug);

  const { title } = modulo;
  const description = modulo.about.intro.substring(0, 155);
  const url = `${configs.metadata.url}/modulos/${moduloSlug}/${songSlug}`;

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
    }
  }
}

export async function generateStaticParams(){
  return songs.map(({ slug }) => ({ songSlug: slug }));
}