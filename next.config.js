const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'loremflickr.com',
      'www.flashscore.ua',
      'media.api-sports.io',
      'media-1.api-sports.io',
      'media-2.api-sports.io',
      'media-3.api-sports.io',
      'media-4.api-sports.io',
      'media-5.api-sports.io',
      'media-6.api-sports.io',
    ],
  },
};

module.exports = withTM(nextConfig);
