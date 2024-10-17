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
        source: '/modulos/aquecimentos',
        destination: '/modulos/vocalizes',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
