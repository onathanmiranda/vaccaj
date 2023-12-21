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
        source: '/modulos/aquecimentos/exercicio-diafragma-controle-do-ar',
        destination: '/modulos/vocalizes/exercicio-diafragma-controle-do-ar',
        permanent: true,
      },
      {
        source: '/modulos/aquecimentos/23',
        destination: '/modulos/vocalizes/staccato-hi-hi-hi',
        permanent: true,
      },
      {
        source: '/modulos/aquecimentos/24',
        destination: '/modulos/vocalizes/legato-arpejo',
        permanent: true,
      },
      {
        source: '/modulos/aquecimentos/25',
        destination: '/modulos/vocalizes/legato-arpejo-or-staccato-arpejo',
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
      },
      {
        source: '/modulos/vaccaj/o%20placido%20il%20mare',
        destination: '/modulos/vaccaj/o-placido-il-mare',
        permanent: true
      }
    ]
  },
}
 
module.exports = nextConfig