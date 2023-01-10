// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = { i18n, reactStrictMode: true, nextConfig };

const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
