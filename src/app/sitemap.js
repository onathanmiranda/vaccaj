import Models from "@/models";

import configs from "@/configs";

export default async function sitemap() {
  const allModulosAndRelatedSongSlugs =
    await Models.Modulos.getAllModulosAndRelatedSongURLs();

  const modulesSiteMapUrls = allModulosAndRelatedSongSlugs.reduce(
    (acc, modulo) => {
      acc.push({
        url: configs.metadata.url + modulo.url,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1
      });

      modulo.songs.forEach((song) => {
        acc.push({
          url: configs.metadata.url + song.url,
          lastModified: new Date(),
          changeFrequency: "yearly",
          priority: 0.9
        });
      });
      return acc;
    },
    []
  );

  const sitemapLinks = [
    {
      url: `${configs.metadata.url}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: `${configs.metadata.url}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1
    },
    {
      url: `${configs.metadata.url}/ferramentas-externas`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1
    },
    ...modulesSiteMapUrls
  ];

  return sitemapLinks;
}
