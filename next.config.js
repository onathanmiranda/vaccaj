const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize']
  },
  async redirects() {
    return [
      {
        source: '/modulos/aquecimentos',
        destination: '/modulos/vocalizes',
        permanent: true,
      },
    ]
  },
}
 
module.exports = nextConfig