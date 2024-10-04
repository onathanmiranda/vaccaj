import Models from "@/models";
import ModuloPage from "@/components/general/modulo-page";

const { Modulos } = Models;

export default async function Layout(props) {
  const moduloSlug = props.params.modulo;
  const modulo = await Modulos.getModulosAndRelationsBySlug(moduloSlug);
  return <ModuloPage {...props} modulo={modulo} />;
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
  return modulos.map((modulo) => ({ modulo: modulo.slug }));
}
