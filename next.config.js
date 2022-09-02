/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  },
  async redirects(){
    return [
      {
        source: '/aquecimentos',
        destination: '/modulos/aquecimentos',
        permanent: true
      },
      {
        source: '/vaccaj',
        destination: '/modulos/vaccaj',
        permanent: true
      },
    ]
  },
}
