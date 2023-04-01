/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["aleph-m-2.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
