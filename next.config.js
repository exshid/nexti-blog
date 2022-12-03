/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/cache')
    }

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['static.wixstatic.com'],
},
}
