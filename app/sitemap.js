import configs from '../configs';

export default async function sitemap(){
  const modules = await fetch(`${configs.env.baseUrl}/api/modulos`).then(res => res.json());

  const modulesSiteMapUrls = modules.map((modulo) => {
    return {
      url: `${configs.env.baseUrl}/modulos/${modulo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  });

  return [
    {
      url: `${configs.env.baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${configs.env.baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${configs.env.baseUrl}/ferramentas-externas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...modulesSiteMapUrls
  ];
}