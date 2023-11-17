const svg = require('@neodx/svg/webpack');
const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['i.imgur.com']
  },
  reactStrictMode: true,
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          group: true,
          root: 'src/shared/ui/icon/assets',
          output: 'public/sprire',
          resetColors: false,
          metadata: 'src/shared/ui/icon/sprite.h.ts',
        }),
      );
    }
    return config;
  },
}

module.exports = nextConfig
