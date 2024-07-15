import Modulos from "@/models/Modulos";

export default async function Page({ params }){
  const modulo = await Modulos.getModuloBySlug(params.slug);
  return (
    <h1>{params.slug}</h1>
  );
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
  const modulos = await Modulos.getAll();
  return modulos.map(({ slug }) => ({ slug }));
}