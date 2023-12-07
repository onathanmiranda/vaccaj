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
      {
        source: '/aquecimentos',
        destination: '/modulos/vocalizes',
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
      }
    ]
  },
}
 
module.exports = nextConfig