/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'myudssystemsstorageprod.blob.core.windows.net',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['myudssystemsstorageprod.blob.core.windows.net'],
  },
};
