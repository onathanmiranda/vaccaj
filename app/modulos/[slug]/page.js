import ModulesController from "../../../data/controllers/Modules";
import configs from "../../../configs";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const [ modulo ] = await ModulesController.getAll({ where: { slug }});

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
  const modules = await ModulesController.getAll();
  return modules.map(({ slug }) => slug);
}

export default async function Page({ params }) {
  const { slug } = params;
  const [ modulo ] = await ModulesController.getAll({ where: { slug }});
  let { title, about } = modulo || {};
  const { intro } = about || {};

  return (
    <main>
      {title && <h1 className="text-2xl lowercase">{title}</h1>}
      {intro && <p className="mt-21">{intro}</p>}
    </main>
  )
}