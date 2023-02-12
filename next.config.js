const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
  },
}

module.exports = nextConfig
