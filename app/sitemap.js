import data from '../data';
import configs from '../configs';

export default async function sitemap(){
  const { modules } = data;

  const modulesSiteMapUrls = modules.map((modulo) => {
    return {
      url: `${configs.metadata.url}/modulos/${modulo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  });

  return [
    {
      url: `${configs.metadata.url}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${configs.metadata.url}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${configs.metadata.url}/ferramentas-externas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...modulesSiteMapUrls
  ];
}