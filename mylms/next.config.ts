/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"], // Allow localhost for image loading
  },
};

module.exports = nextConfig;
