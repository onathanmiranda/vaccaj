import Modulos from "@/models/Modulos";
import ModuloPage from "@/components/general/modulo-page";

export default async function Layout(props) {
  const moduloSlug = props.params.modulo;
  const modulo = await Modulos.getModuloAggregateBySlug(moduloSlug);
  return <ModuloPage {...props} modulo={modulo} />;
}

export async function generateMetadata({ params }) {
  const moduloSlug = params.modulo;
  const modulo = await Modulos.getModuloAggregateBySlug(moduloSlug);

  const title = modulo.title;
  const description = modulo.about.intro;
  const url = modulo.url;
  
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
      url
    }
  }
}

export async function generateStaticParams() {
  const allModulos = await Modulos.getAll();
  const params = allModulos.map((modulo) => {
    return {
      modulo: modulo.slug
    }
  });
  return params;
}
