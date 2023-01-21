const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  reactStrictMode: true,
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/verification',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
