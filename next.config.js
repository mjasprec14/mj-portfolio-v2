/** @type {import('next').NextConfig} */

const isProd = process.env.NODE.ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd
    ? 'https://mj-portfolio-v2.vercel.app'
    : 'http://localhost:3000',
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
