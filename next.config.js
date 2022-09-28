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
    ]
  },
}
