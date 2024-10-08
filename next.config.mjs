/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/modulos/vaccaj',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
