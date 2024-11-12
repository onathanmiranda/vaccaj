/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/modulos/vaccaj',
        permanent: false,
      },
      {
        source: '/modulos/vocalizes/vibracao-labial-descendente',
        destination: '/modulos/vocalizes/vibracao-labial',
        permanent: true,
      },
      {
        source: '/modulos/aquecimentos/:path*',
        destination: '/modulos/vocalizes/:path*',
        permanent: true,
      },
      {
        source: '/modules/:path*',
        destination: '/modulos/:path*',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
