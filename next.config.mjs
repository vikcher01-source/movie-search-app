/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройка для загрузки изображений с внешних источников
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
};

export default nextConfig;
