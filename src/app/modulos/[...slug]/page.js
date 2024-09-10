import Models from "@/models";
import Modulo from "@/components/templates/modulo";

export default async function Page(props) {
  const modulo = await Models.Modulos.getModuloAndRelatedDataBySlug(
    props.params.slug
  );
  return <Modulo modulo={modulo} />;
}

/* export async function generateMetadata({ params }) {
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
} */

export async function generateStaticParams() {
  const modulos = await Models.Modulos.getAll();
  const songs = await Models.Songs.getAll();
  return modulos.map(({ slug }) => ({ slug }));
}
