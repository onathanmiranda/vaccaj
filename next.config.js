/** @type {import('next').NextConfig} */

const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
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
      {
        source: '/modulos/belting/ne-notas-repetidas',
        destination: '/modulos/belting/ne-sons-repetidos',
        permanent: true
      },
      {
        source: '/modulos/panofka/panofka-op85-n16',
        destination: '/modulos/panofka/panofka-op81-n16',
        permanent: true
      },
      {
        source: '/modulos/panofka/panofka-op85-n20',
        destination: '/modulos/panofka/panofka-op81-n20',
        permanent: true
      },
    ]
  },
}
