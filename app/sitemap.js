import data, { getModuleSongs } from '../data';
import configs from '../configs';

export default async function sitemap(){
  const { modules } = data;

  const modulesSiteMapUrls = modules.reduce((acc, modulo) => {
    const moduleSongs = getModuleSongs(modulo);

    const moduloUrl = {
      url: `${configs.metadata.url}/modulos/${modulo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    };

    const songsUrls = moduleSongs.map((song) => ({
      url: moduloUrl.url.concat(`/${song.slug || song.id}`),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9
    }));

    acc.push(moduloUrl, ...songsUrls);
    return acc;
  }, []);

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
      priority: 0.1
    },
    {
      url: `${configs.metadata.url}/ferramentas-externas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1
    },
    ...modulesSiteMapUrls
  ];
}