import configs from "../../../configs";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const [ modulo ] = await fetch(new URL(`${configs.metadata.url}/api/modulos?slug=${slug}`)).then((res) => res.json());

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
  const modules = await fetch(new URL(`${configs.metadata.url}/api/modulos`)).then((res) => res.json());
  return modules.map(({ slug }) => slug);
}

export default async function Page({ params }) {
  console.log(new URL(`${configs.metadata.url}/api/modulos?slug=${slug}`))
  const { slug } = params;
  const [ modulo ] = await fetch(new URL(`${configs.metadata.url}/api/modulos?slug=${slug}`)).then((res) => res.json());
  let { title, about } = modulo || {};
  const { intro } = about || {};

  return (
    <main>
      {title && <h1 className="text-2xl lowercase">{title}</h1>}
      {intro && <p className="mt-21">{intro}</p>}
    </main>
  )
}