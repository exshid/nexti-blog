/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
  
    if (isServer) {
      require('./utils/cache')
    }


    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com'],
},
}
