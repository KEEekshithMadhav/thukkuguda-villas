/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: false,
  },
};

export default nextConfig;
