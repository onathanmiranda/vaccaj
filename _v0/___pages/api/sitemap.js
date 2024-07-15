import data from "../../database";

const { modules } = data;

const today = new Date().toISOString().split('T')[0];
const baseUrl = `${process.env.SITE_URL}`;

const modulesPaths = modules.map(({ slug }) => `/${slug}`);

const songsPaths = modules.reduce((acc, module) => {
  let songsPaths = [...acc];
  module.skills.forEach((skill) => {
    skill.lessons.forEach((lesson) => {
      lesson.songs.forEach((song) => {
        const moduleSlug = module.slug;
        const songSlug = song.slug ? song.slug : song.id;
        songsPaths.push(`/${moduleSlug}/${songSlug}`);
      });
    });
  });
  return songsPaths;
}, []);

export default function handler(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
    
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
        <url>
          <loc>${baseUrl}/</loc>
          <lastmod>${today}</lastmod>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>${baseUrl}/politica-de-privacidade</loc>
          <lastmod>${today}</lastmod>
          <priority>0.1</priority>
        </url>
        <url>
          <loc>${baseUrl}/ferramentas-externas</loc>
          <lastmod>${today}</lastmod>
          <priority>0.1</priority>
        </url>
        ${modulesPaths.map((path) => {
          return (
            `<url>
              <loc>${baseUrl}/modulos${path}</loc>
              <lastmod>${today}</lastmod>
              <priority>0.9</priority>
            </url>`
          )
        }).join('')}
        ${songsPaths.map((path) => {
          return (
            `<url>
              <loc>${baseUrl}/modulos${path}</loc>
              <lastmod>${today}</lastmod>
              <priority>0.9</priority>
            </url>`
          )
        }).join('')}
      </urlset>
    `;

  res.end(xml)
}