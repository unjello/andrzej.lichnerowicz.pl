/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    esmExternals: false,
  },
  distDir: 'build',
  trailingSlash: true
}

module.exports = nextConfig
