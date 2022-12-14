/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {},
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'img.icons8.com',
      'lh3.googleusercontent.com',
    ],
  },
}

module.exports = nextConfig
