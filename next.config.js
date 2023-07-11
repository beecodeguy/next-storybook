/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: [], // for importing images
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    // config.experiments = {
    //   ...config.experiments,
    //   topLevelAwait: true,
    // };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "assets")],
  },
};

module.exports = nextConfig;
