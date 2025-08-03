/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer, webpack }) => {
    // Disable cache for all builds, not just client-side
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;