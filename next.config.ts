/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = {
  output: 'export',
  distDir: 'docs', // Generate static files in the `docs/` folder

  basePath: '/techv',
  assetPrefix: '/techv',
};

