import Models from "@/models";

import ModuloSong from "@/components/templates/modulo-song";

export default async function Layout(props) {
  const modulo = await Models.Modulos.getModuloAndRelatedDataBySlug(
    props.params.slug
  );
  return <ModuloSong {...props} modulo={modulo} />;
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
  const songs = await Models.Songs.getAll();
  return songs.map(({ slug: songSlug }) => ({ songSlug }));
}
